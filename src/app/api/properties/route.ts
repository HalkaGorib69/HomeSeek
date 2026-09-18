import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { redis, PROPERTIES_KEY } from '@/lib/redis'
import { isAuthenticated } from '@/lib/adminAuth'
import { Property, PropertyField } from '@/types/property'
import seedProperties from '@/data/properties.json'

// Cache the public property list for 60s so bursts of homepage traffic
// only cost 1 Redis command per minute instead of 1 per visitor.
export const revalidate = 60

async function readProperties(): Promise<Property[]> {
  const data = await redis.get<Property[]>(PROPERTIES_KEY)
  if (data === null) {
    await redis.set(PROPERTIES_KEY, seedProperties)
    return seedProperties as Property[]
  }
  return data
}

async function writeProperties(properties: Property[]) {
  await redis.set(PROPERTIES_KEY, properties)
}

function sanitizeFields(fields: unknown): PropertyField[] {
  if (!Array.isArray(fields)) return []
  return fields
    .filter((f): f is PropertyField => !!f && typeof f.label === 'string' && typeof f.value === 'string')
    .map((f) => ({ label: f.label.trim(), value: f.value.trim() }))
    .filter((f) => f.label && f.value)
}

export async function GET() {
  const properties = await readProperties()
  return NextResponse.json(properties)
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = await request.json()
  const { title, description, images, fields } = body

  if (!title) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const properties = await readProperties()
  const newId = properties.length > 0 ? Math.max(...properties.map((p) => p.id)) + 1 : 1

  const newProperty: Property = {
    id: newId,
    title,
    description: description || '',
    images: images && images.length > 0 ? images : ['p1.webp'],
    fields: sanitizeFields(fields),
  }

  properties.unshift(newProperty)
  await writeProperties(properties)
  revalidatePath('/api/properties')
  revalidatePath('/')

  return NextResponse.json(newProperty, { status: 201 })
}

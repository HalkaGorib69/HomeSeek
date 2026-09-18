import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import { redis, PROPERTIES_KEY } from '@/lib/redis'
import { isAuthenticated } from '@/lib/adminAuth'
import { Property, PropertyField } from '@/types/property'
import seedProperties from '@/data/properties.json'

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

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = Number(params.id)
  const body = await request.json()
  const properties = await readProperties()
  const index = properties.findIndex((p) => p.id === id)

  if (index === -1) {
    return NextResponse.json({ error: 'Property not found' }, { status: 404 })
  }

  properties[index] = {
    ...properties[index],
    ...body,
    id,
    fields: body.fields ? sanitizeFields(body.fields) : properties[index].fields,
  }

  await writeProperties(properties)
  revalidatePath('/api/properties')
  revalidatePath('/')
  return NextResponse.json(properties[index])
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = Number(params.id)
  const properties = await readProperties()
  const filtered = properties.filter((p) => p.id !== id)

  if (filtered.length === properties.length) {
    return NextResponse.json({ error: 'Property not found' }, { status: 404 })
  }

  await writeProperties(filtered)
  revalidatePath('/api/properties')
  revalidatePath('/')
  return NextResponse.json({ success: true })
}

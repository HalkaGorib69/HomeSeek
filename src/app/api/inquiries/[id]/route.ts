import { NextRequest, NextResponse } from 'next/server'
import { redis, INQUIRIES_KEY } from '@/lib/redis'
import { isAuthenticated } from '@/lib/adminAuth'
import { Inquiry, InquiryStatus } from '@/types/inquiry'

const VALID_STATUSES: InquiryStatus[] = ['pending', 'responded', 'no-response']

async function readInquiries(): Promise<Inquiry[]> {
  const data = await redis.get<Inquiry[]>(INQUIRIES_KEY)
  return data ?? []
}

async function writeInquiries(inquiries: Inquiry[]) {
  await redis.set(INQUIRIES_KEY, inquiries)
}

export async function PATCH(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = Number(params.id)
  const body = await request.json()
  const { status } = body

  if (!VALID_STATUSES.includes(status)) {
    return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
  }

  const inquiries = await readInquiries()
  const index = inquiries.findIndex((i) => i.id === id)

  if (index === -1) {
    return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 })
  }

  inquiries[index] = { ...inquiries[index], status }
  await writeInquiries(inquiries)

  return NextResponse.json(inquiries[index])
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const id = Number(params.id)
  const inquiries = await readInquiries()
  const filtered = inquiries.filter((i) => i.id !== id)

  if (filtered.length === inquiries.length) {
    return NextResponse.json({ error: 'Inquiry not found' }, { status: 404 })
  }

  await writeInquiries(filtered)
  return NextResponse.json({ success: true })
}

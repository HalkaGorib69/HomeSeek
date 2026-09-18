import { NextRequest, NextResponse } from 'next/server'
import { redis, INQUIRIES_KEY } from '@/lib/redis'
import { isAuthenticated } from '@/lib/adminAuth'
import { Inquiry } from '@/types/inquiry'

async function readInquiries(): Promise<Inquiry[]> {
  const data = await redis.get<Inquiry[]>(INQUIRIES_KEY)
  return data ?? []
}

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const inquiries = await readInquiries()
  return NextResponse.json(inquiries)
}

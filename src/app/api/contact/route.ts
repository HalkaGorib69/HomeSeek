import { NextRequest, NextResponse } from 'next/server'
import { redis, INQUIRIES_KEY } from '@/lib/redis'
import { Inquiry } from '@/types/inquiry'

async function readInquiries(): Promise<Inquiry[]> {
  const data = await redis.get<Inquiry[]>(INQUIRIES_KEY)
  return data ?? []
}

async function writeInquiries(inquiries: Inquiry[]) {
  await redis.set(INQUIRIES_KEY, inquiries)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, source, date, financeApproval } = body

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const extraDetails = [
      date ? `Preferred contact date: ${date}` : null,
      financeApproval ? `Finance pre-approval: ${financeApproval}` : null,
    ].filter(Boolean)

    const fullMessage = [message, ...extraDetails].filter(Boolean).join('\n')

    const inquiries = await readInquiries()
    const newId = inquiries.length > 0 ? Math.max(...inquiries.map((i) => i.id)) + 1 : 1

    const newInquiry: Inquiry = {
      id: newId,
      name,
      email,
      phone,
      message: fullMessage,
      source: source || 'Contact Form',
      status: 'pending',
      createdAt: new Date().toISOString(),
    }

    inquiries.unshift(newInquiry)
    await writeInquiries(inquiries)

    // TODO: Optionally also send an email notification (Resend, SendGrid, etc.)

    return NextResponse.json(
      { success: true, message: 'Message received' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json(
      { error: 'Error processing request' },
      { status: 500 }
    )
  }
}

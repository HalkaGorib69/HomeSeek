import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Here you would typically send an email using a service like Resend, SendGrid, etc.
    // For now, we'll just log it and return success
    console.log('Contact form submission:', { name, email, phone, message })

    // TODO: Integrate with email service (Resend, SendGrid, Nodemailer, etc.)
    // Example with Resend (uncomment to use):
    // const res = await resend.emails.send({
    //   from: 'noreply@homeseekadvisory.com.au',
    //   to: 'sabi.hossan@homeseekadvisory.com.au',
    //   subject: `New inquiry from ${name}`,
    //   html: `
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Phone:</strong> ${phone}</p>
    //     <p><strong>Message:</strong> ${message}</p>
    //   `,
    // })

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

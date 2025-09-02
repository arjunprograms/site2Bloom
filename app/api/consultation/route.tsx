import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import { z } from "zod"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

const consultationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, "Service selection is required"),
  preferredDate: z.string().optional(),
  message: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    if (!resend) {
      console.error("Resend API key not configured")
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
    }

    const body = await request.json()

    const validatedData = consultationSchema.parse(body)

    const { data, error } = await resend.emails.send({
      from: "BloomIntel <noreply@bloomintelai.com>",
      to: ["business@bloomintelai.com"],
      subject: `New Consultation Request from ${validatedData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #00ff88; padding-bottom: 10px;">
            New Consultation Request
          </h2>
          
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${validatedData.name}</p>
            <p><strong>Email:</strong> ${validatedData.email}</p>
            ${validatedData.phone ? `<p><strong>Phone:</strong> ${validatedData.phone}</p>` : ""}
            ${validatedData.company ? `<p><strong>Company:</strong> ${validatedData.company}</p>` : ""}
          </div>
          
          <div style="background: #f0fff4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">Service Details</h3>
            <p><strong>Service Interest:</strong> ${validatedData.service}</p>
            ${validatedData.preferredDate ? `<p><strong>Preferred Date:</strong> ${validatedData.preferredDate}</p>` : ""}
          </div>
          
          ${
            validatedData.message
              ? `
            <div style="background: #fefce8; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151; margin-top: 0;">Project Details</h3>
              <p style="white-space: pre-wrap;">${validatedData.message}</p>
            </div>
          `
              : ""
          }
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>This consultation request was submitted through the BloomIntel website.</p>
            <p>Please respond within 24 hours to maintain our service standards.</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    await resend.emails.send({
      from: "BloomIntel <noreply@bloomintelai.com>",
      to: [validatedData.email],
      subject: "Consultation Request Received - BloomIntel",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1f2937; border-bottom: 2px solid #00ff88; padding-bottom: 10px;">
            Thank You for Your Interest!
          </h2>
          
          <p>Dear ${validatedData.name},</p>
          
          <p>Thank you for reaching out to BloomIntel. We've received your consultation request for <strong>${validatedData.service}</strong> and our team will review it shortly.</p>
          
          <div style="background: #f0fff4; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #374151; margin-top: 0;">What's Next?</h3>
            <ul style="color: #4b5563;">
              <li>Our AI solutions expert will review your request within 24 hours</li>
              <li>We'll schedule a consultation call at your preferred time</li>
              <li>During the call, we'll discuss your specific needs and how our AI solutions can transform your business</li>
            </ul>
          </div>
          
          <p>If you have any urgent questions, feel free to contact us directly at <a href="mailto:business@bloomintelai.com">business@bloomintelai.com</a>.</p>
          
          <p>Best regards,<br>
          <strong>The BloomIntel Team</strong><br>
          <em>Transforming Business Through AI Innovation</em></p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
            <p>BloomIntel AI Inc - Custom AI Solutions for Your Business</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ message: "Consultation request sent successfully", id: data?.id }, { status: 200 })
  } catch (error) {
    console.error("API error:", error)

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Invalid form data", details: error.errors }, { status: 400 })
    }

    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

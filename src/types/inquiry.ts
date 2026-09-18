export type InquiryStatus = 'pending' | 'responded' | 'no-response'

export interface Inquiry {
  id: number
  name: string
  email: string
  phone: string
  message: string
  source: string
  status: InquiryStatus
  createdAt: string
}

import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: process.env.KV_REST_API_URL!,
  token: process.env.KV_REST_API_TOKEN!,
})

export const PROPERTIES_KEY = 'homeseek:properties'
export const INQUIRIES_KEY = 'homeseek:inquiries'

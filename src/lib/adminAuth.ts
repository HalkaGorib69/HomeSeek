import { NextRequest } from 'next/server'
import crypto from 'crypto'

const SECRET = process.env.ADMIN_SESSION_SECRET || 'homeseek-dev-secret-change-me'
export const ADMIN_COOKIE = 'admin_session'

export function getSessionToken(): string {
  return crypto.createHmac('sha256', SECRET).update('admin-authenticated').digest('hex')
}

export function isAuthenticated(request: NextRequest): boolean {
  const cookie = request.cookies.get(ADMIN_COOKIE)?.value
  return cookie === getSessionToken()
}

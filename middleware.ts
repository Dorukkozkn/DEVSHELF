import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Hiçbir işlem yapmadan devam et
  return NextResponse.next()
}

export const config = {
  matcher: [], // Boş bırakabilirsin veya "/about" gibi path'ler ekleyebilirsin
}

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();

  // libera arquivos estáticos e a própria página de manutenção
  if (
    url.pathname.startsWith("/_next") ||
    url.pathname.startsWith("/api") ||
    url.pathname.startsWith("/favicon.ico") ||
    url.pathname.startsWith("/logo-b1.png") ||
    url.pathname === "/manutencao"
  ) {
    return NextResponse.next();
  }

  url.pathname = "/manutencao";
  return NextResponse.redirect(url);
}
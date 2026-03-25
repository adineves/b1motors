import { NextResponse } from 'next/server'

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwHycSflcc-ISEoFliASeS_LP1E2RZ82i06cbz5Hn_SEympGeblpPnLWmDMJk-S8OP_sQ/exec'

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const response = await fetch(SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(body),
      redirect: 'follow',
      cache: 'no-store',
    })

    const text = await response.text()

    let data: any

    try {
      data = JSON.parse(text)
    } catch {
      return NextResponse.json({
        ok: false,
        erro: 'O Apps Script não retornou JSON.',
        raw: text,
        status: response.status,
      })
    }

    return NextResponse.json(data)
  } catch (error) {
    console.error('ERRO NA ROTA /api/ficha:', error)

    return NextResponse.json(
      {
        ok: false,
        erro: 'Falha ao enviar dados para o Google Sheets.',
      },
      { status: 500 }
    )
  }
}
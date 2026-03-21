'use client'

import { Suspense, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import type { ChangeEvent, FormEvent, ReactNode } from 'react'

type FeedbackType = 'success' | 'error' | null

type FormDataState = {
  nome: string
  telefone: string
  email: string
  origem: string
  marca: string
  modelo: string
  ano: string
  cor: string
  preco: string
  cambio: string
  pagto: string
  obs: string
}

const marcas = [
  'Audi',
  'BMW',
  'Mercedes-Benz',
  'Volkswagen',
  'Toyota',
  'Honda',
  'Chevrolet',
  'Ford',
  'Hyundai',
  'Jeep',
  'Porsche',
  'Volvo',
  'Land Rover',
  'Fiat',
  'Nissan',
  'Mitsubishi',
  'Ferrari',
  'Lamborghini',
]

const inputClass =
  'w-full rounded-md border border-[#2e2e2e] bg-[#0d0d0d] px-4 py-2.5 text-[15px] text-[#f0efe8] outline-none transition placeholder:text-[#666] focus:border-[#8a6f2e]'

export default function FichaPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0d0d0d] px-6 py-20 text-white">
          Carregando ficha...
        </div>
      }
    >
      <FichaContent />
    </Suspense>
  )
}

function FichaContent() {
  const searchParams = useSearchParams()

  const [form, setForm] = useState<FormDataState>({
    nome: '',
    telefone: '',
    email: '',
    origem: 'Site (b1motors.com.br)',
    marca: searchParams.get('marca') || '',
    modelo: searchParams.get('modelo') || '',
    ano: searchParams.get('ano') || '',
    cor: searchParams.get('cor') || '',
    preco: searchParams.get('preco') || '',
    cambio: searchParams.get('cambio') || '',
    pagto: '',
    obs: '',
  })

  const [enviando, setEnviando] = useState(false)
  const [feedbackType, setFeedbackType] = useState<FeedbackType>(null)
  const [feedbackMessage, setFeedbackMessage] = useState('')

  const updateField =
    (field: keyof FormDataState) =>
    (
      e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }))
    }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!form.nome.trim() || !form.telefone.trim() || !form.marca.trim()) {
      setFeedbackType('error')
      setFeedbackMessage('Nome, telefone e marca são obrigatórios.')
      return
    }

    setFeedbackType(null)
    setFeedbackMessage('')
    setEnviando(true)

    try {
      const payload = {
        nome: form.nome.trim(),
        telefone: form.telefone.trim(),
        email: form.email.trim(),
        origem: form.origem.trim(),
        marca: form.marca.trim(),
        modelo: form.modelo.trim(),
        ano: form.ano.trim(),
        cor: form.cor.trim(),
        preco: form.preco.trim(),
        cambio: form.cambio.trim(),
        pagto: form.pagto.trim(),
        obs: form.obs.trim(),
      }

      const response = await fetch('/api/ficha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const json = await response.json()

      if (json?.ok === true && json?.method === 'POST') {
        setFeedbackType('success')
        setFeedbackMessage(
          'Recebemos seu interesse com sucesso. Nossa equipe entrará em contato em breve.'
        )

        setForm((prev) => ({
          ...prev,
          nome: '',
          telefone: '',
          email: '',
          pagto: '',
          obs: '',
        }))
      } else {
        throw new Error(json?.erro || json?.message || 'Resposta inválida')
      }
    } catch (error) {
      console.error('Erro ao enviar ficha:', error)
      setFeedbackType('error')
      setFeedbackMessage(
        'Falha no envio. Verifique a conexão ou tente novamente.'
      )
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#f0efe8]">
      <nav className="flex items-center gap-4 border-b border-[#222] bg-[#141414] px-8 py-4">
        <div className="text-2xl font-bold tracking-[0.06em]">
          B<span className="text-[#C9A84C]">1</span> MOTORS
        </div>

        <div className="h-[18px] w-px bg-[#2e2e2e]" />

        <div className="text-xs uppercase tracking-[0.12em] text-[#666]">
          Ficha de interesse
        </div>
      </nav>

      <main className="mx-auto max-w-[760px] px-6 pb-16 pt-10">
        <h1 className="text-3xl font-semibold tracking-[0.04em]">
          Cadastro de interesse
        </h1>

        <p className="mt-2 text-sm text-[#666]">
          Preencha os dados para registrarmos seu interesse no veículo.
        </p>

        <div className="mb-8 mt-8 h-[2px] w-7 bg-[#C9A84C]" />

        {feedbackType === 'success' && (
          <div className="mb-6 flex items-start gap-3 rounded-lg border border-[#1a4a28] bg-[#0e1f14] px-5 py-4 text-[#4caf7d]">
            <span className="text-lg">✓</span>
            <div>
              <strong className="mb-1 block">Ficha registrada com sucesso!</strong>
              <span className="text-sm">{feedbackMessage}</span>
            </div>
          </div>
        )}

        {feedbackType === 'error' && (
          <div className="mb-6 flex items-start gap-3 rounded-lg border border-[#5c1e1e] bg-[#1f0e0e] px-5 py-4 text-[#e05555]">
            <span className="text-lg">⚠</span>
            <div>
              <strong className="mb-1 block">Erro ao enviar.</strong>
              <span className="text-sm">{feedbackMessage}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <section className="mb-5 rounded-xl border border-[#222] bg-[#181818] p-6">
            <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-[#C9A84C]">
              <span>Seus dados</span>
              <div className="h-px flex-1 bg-[#1e1710]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Nome completo" required>
                <input
                  type="text"
                  name="nome"
                  placeholder="João Silva"
                  value={form.nome}
                  onChange={updateField('nome')}
                  className={inputClass}
                />
              </Field>

              <Field label="Telefone / WhatsApp" required>
                <input
                  type="tel"
                  name="telefone"
                  placeholder="(11) 99999-9999"
                  value={form.telefone}
                  onChange={updateField('telefone')}
                  className={inputClass}
                />
              </Field>

              <Field label="E-mail">
                <input
                  type="email"
                  name="email"
                  placeholder="joao@email.com"
                  value={form.email}
                  onChange={updateField('email')}
                  className={inputClass}
                />
              </Field>

              <Field label="Como nos conheceu">
                <select
                  name="origem"
                  value={form.origem}
                  onChange={updateField('origem')}
                  className={inputClass}
                >
                  <option value="">Selecione...</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Google">Google</option>
                  <option value="Indicação">Indicação</option>
                  <option value="Passando na loja">Passando na loja</option>
                  <option value="WhatsApp">WhatsApp</option>
                  <option value="Site (b1motors.com.br)">
                    Site (b1motors.com.br)
                  </option>
                  <option value="Outro">Outro</option>
                </select>
              </Field>
            </div>
          </section>

          <section className="mb-5 rounded-xl border border-[#222] bg-[#181818] p-6">
            <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-[#C9A84C]">
              <span>Veículo desejado</span>
              <div className="h-px flex-1 bg-[#1e1710]" />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Marca" required>
                <input
                  list="marcas"
                  name="marca"
                  placeholder="Audi"
                  value={form.marca}
                  onChange={updateField('marca')}
                  className={inputClass}
                />
                <datalist id="marcas">
                  {marcas.map((marca) => (
                    <option key={marca} value={marca} />
                  ))}
                </datalist>
              </Field>

              <Field label="Modelo">
                <input
                  type="text"
                  name="modelo"
                  placeholder="A5"
                  value={form.modelo}
                  onChange={updateField('modelo')}
                  className={inputClass}
                />
              </Field>

              <Field label="Ano">
                <input
                  type="text"
                  name="ano"
                  placeholder="2024"
                  value={form.ano}
                  onChange={updateField('ano')}
                  className={inputClass}
                />
              </Field>

              <Field label="Cor">
                <input
                  type="text"
                  name="cor"
                  placeholder="Branco"
                  value={form.cor}
                  onChange={updateField('cor')}
                  className={inputClass}
                />
              </Field>

              <Field label="Faixa de preço">
                <input
                  type="text"
                  name="preco"
                  placeholder="R$ 120.000,00"
                  value={form.preco}
                  onChange={updateField('preco')}
                  className={inputClass}
                />
              </Field>

              <Field label="Câmbio">
                <input
                  type="text"
                  name="cambio"
                  placeholder="Automático"
                  value={form.cambio}
                  onChange={updateField('cambio')}
                  className={inputClass}
                />
              </Field>

              <Field label="Forma de pagamento">
                <select
                  name="pagto"
                  value={form.pagto}
                  onChange={updateField('pagto')}
                  className={inputClass}
                >
                  <option value="">Selecione...</option>
                  <option value="Indiferente">Indiferente</option>
                  <option value="Financiamento">Financiamento</option>
                  <option value="À vista">À vista</option>
                </select>
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Observações">
                <textarea
                  name="obs"
                  placeholder="Alguma preferência adicional..."
                  value={form.obs}
                  onChange={updateField('obs')}
                  className={`${inputClass} min-h-[100px] resize-y`}
                />
              </Field>
            </div>
          </section>

          <div className="mt-6">
            <button
              type="submit"
              disabled={enviando}
              className="flex w-full items-center justify-center rounded-lg bg-[#C9A84C] px-4 py-3 text-lg font-semibold uppercase tracking-[0.1em] text-[#0d0d0d] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {enviando ? 'Enviando...' : 'Enviar ficha'}
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

function Field({
  label,
  required = false,
  children,
}: {
  label: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[11px] uppercase tracking-[0.09em] text-[#666]">
        {label}
        {required && <span className="ml-1 text-[#C9A84C]">*</span>}
      </label>
      {children}
    </div>
  )
}
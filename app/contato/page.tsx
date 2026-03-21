export default function ContatoPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 text-white md:px-10 md:py-24">
      <div className="space-y-28">
        <div className="grid gap-14 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
          <div className="space-y-5">
            <p className="text-xs tracking-[0.34em] text-white/45">CONTATO</p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Vamos conversar sobre o seu próximo carro.
            </h1>
          </div>

          <div className="pt-1">
            <p className="text-sm leading-8 text-white/65 md:text-base">
              Entre em contato para tirar dúvidas, solicitar informações ou
              agendar uma visita. Atendimento direto e sem burocracia.
            </p>
          </div>
        </div>

        <div className="grid gap-14 xl:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-12">
            <h2 className="text-2xl font-semibold">Envie uma mensagem</h2>

            <form className="mt-10 space-y-6">
              <input
                type="text"
                placeholder="Nome"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-red-500/40"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-red-500/40"
              />

              <input
                type="text"
                placeholder="Telefone"
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-red-500/40"
              />

              <textarea
                placeholder="Mensagem"
                rows={5}
                className="w-full rounded-xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-white outline-none placeholder:text-white/40 focus:border-red-500/40"
              />

              <button
                type="submit"
                className="w-full rounded-full bg-red-600 px-6 py-4 text-sm font-semibold tracking-wide text-white transition hover:bg-red-500"
              >
                Enviar mensagem
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                WHATSAPP
              </p>

              <a
                href="https://wa.me/5511985995549"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-sm leading-7 text-white/70 transition hover:text-white"
              >
                (11) 98599-5549
              </a>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                ENDEREÇO
              </p>

              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-white/70">
                Rua Santos Dumont, 793{"\n"}
                Ferraz de Vasconcelos - SP
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                HORÁRIO
              </p>

              <p className="mt-4 whitespace-pre-line text-sm leading-7 text-white/70">
                Seg a Sex: 8h às 19h{"\n"}
                Sábado: 8h às 18h
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                REDES
              </p>

              <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
                <a
                  href="https://instagram.com/b1motors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Instagram
                </a>

                <a
                  href="https://facebook.com/SEUFACEBOOK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  Facebook
                </a>

                <a
                  href="https://wa.me/5511985995549"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-4 md:p-5">
          <p className="mb-4 text-xs tracking-[0.34em] text-white/45">
            LOCALIZAÇÃO
          </p>

          <div className="overflow-hidden rounded-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.8185973132267!2d-46.36958362571466!3d-23.53902606077002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce659c33e73aed%3A0xb1bc696acf6f9d8!2sB1%20Motors!5e0!3m2!1spt-BR!2sbr!4v1774005813326!5m2!1spt-BR!2sbr"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default function SobrePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 text-white md:px-10 md:py-24">
      <div className="space-y-28">
        <div className="grid gap-14 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
          <div className="space-y-5">
            <p className="text-xs tracking-[0.34em] text-white/45">SOBRE</p>

            <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Presença, curadoria e uma experiência mais refinada.
            </h1>
          </div>

          <div className="pt-1">
            <p className="text-sm leading-8 text-white/65 md:text-base">
              A B1 Motors nasce com a proposta de oferecer uma apresentação mais
              premium para veículos selecionados, unindo confiança, estética e
              atendimento próximo. Mais do que vender carros, a ideia é criar uma
              experiência que valorize cada escolha.
            </p>
          </div>
        </div>

        <div className="grid gap-8 xl:grid-cols-3">
          {[
            {
              title: "MISSÃO",
              subtitle: "Entregar confiança",
              text: "Tornar a busca pelo carro ideal mais clara, segura e visualmente marcante.",
            },
            {
              title: "VISÃO",
              subtitle: "Ser referência local",
              text: "Construir uma presença forte no setor automotivo com identidade premium.",
            },
            {
              title: "VALORES",
              subtitle: "Estética e seriedade",
              text: "Transparência, cuidado com detalhes e respeito pela experiência do cliente.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10"
            >
              <div className="space-y-5">
                <p className="text-xs uppercase tracking-[0.26em] text-white/45">
                  {item.title}
                </p>

                <h2 className="text-2xl font-semibold">{item.subtitle}</h2>

                <p className="text-sm leading-8 text-white/65">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid gap-10 xl:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 md:p-12">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                DIFERENCIAIS
              </p>

              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Uma marca automotiva com linguagem sofisticada.
              </h2>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {[
                "Curadoria de veículos",
                "Atendimento personalizado",
                "Apresentação premium",
                "Presença digital forte",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-sm leading-7 text-white/75"
                >
                  • {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-10 md:p-12">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                CARREIRAS
              </p>

              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Faça parte da B1 Motors
              </h2>

              <p className="text-sm leading-8 text-white/65 md:text-base">
                Buscamos pessoas alinhadas com a proposta da marca e que valorizem
                qualidade, estética e experiência.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-dashed border-white/15 bg-black/20 px-5 py-5">
              <p className="text-sm leading-7 text-white/70">
                No momento, não há vagas abertas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
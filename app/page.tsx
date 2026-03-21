import Link from "next/link";
import { cars } from "../data/cars";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#09090b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.16),transparent_35%)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(#ffffff_0.6px,transparent_0.6px)] [background-size:18px_18px]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-end px-6 pb-20 pt-52 md:px-10 md:pb-28">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[10px] tracking-[0.32em] text-white/70 backdrop-blur-sm md:text-xs">
              SHOWROOM DIGITAL
            </div>

            <h1 className="max-w-5xl text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Performance. <span className="text-white">Exclusividade.</span>{" "}
              <span className="text-red-600">Confiança.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/72 md:text-base">
              Uma nova experiência digital para apresentar veículos selecionados,
              conteúdo automotivo e a identidade da B1 Motors com linguagem premium.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/carros"
                className="rounded-full bg-red-600 px-7 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-red-500"
              >
                Ver Estoque
              </Link>

              <a
                href="https://wa.me/5511985995549"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="mb-6 text-xs tracking-[0.34em] text-white/45">
              B1 MOTORS
            </p>

            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Um site com alma de marca automotiva, não apenas uma vitrine de carros.
            </h2>
          </div>

          <div className="text-sm leading-7 text-white/68 md:text-base">
            <p>
              A B1 Motors oferece uma experiência mais refinada na compra de veículos,
              unindo curadoria, presença e confiança. Um ambiente pensado para quem
              busca mais do que apenas um carro.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              name: "Carros",
              href: "/carros",
              image:
                "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",
            },
            {
              name: "Mídia",
              href: "/midia",
              image:
                "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
            },
            {
              name: "Notícias",
              href: "/noticias",
              image:
                "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=80",
            },
            {
              name: "Sobre",
              href: "/sobre",
              image:
                "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80",
            },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-red-500/40 hover:shadow-[0_0_24px_rgba(220,38,38,0.10)]"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs tracking-[0.3em] text-white/50">
                  EXPLORE
                </p>

                <h3 className="mt-2 text-2xl font-semibold transition duration-300 group-hover:translate-x-1">
                  {item.name}
                </h3>

                <div className="mt-4 h-px w-14 bg-red-600 transition-all duration-300 group-hover:w-24" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
        <div className="mb-8">
          <p className="text-xs tracking-[0.34em] text-white/45">DESTAQUES</p>

          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">
            Veículos em evidência
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {cars.map((car) => (
            <Link
              key={car.id}
              href={`/carros/${car.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(220,38,38,0.10)]"
            >
              <div className="relative h-64 overflow-hidden bg-zinc-800">
                <img
                  src={car.images?.[0]}
                  alt={car.model}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>

              <div className="space-y-3 p-5">
                <p className="text-sm uppercase tracking-[0.2em] text-white/50">
                  {car.brand}
                </p>

                <h3 className="text-xl font-semibold">{car.model}</h3>

                <p className="text-sm text-white/60">{car.km}</p>

                <p className="text-lg font-medium">{car.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
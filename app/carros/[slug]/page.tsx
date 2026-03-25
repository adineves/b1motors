import Link from 'next/link'
import { cars } from '../../../data/cars'
import CarGallery from '../../../components/cars/CarGallery'

export default async function CarPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const car = cars.find((item) => item.slug === slug)

  if (!car) {
    return <div className="px-6 py-40 text-white">Carro não encontrado.</div>
  }

  const fichaHref = `/ficha?marca=${encodeURIComponent(
    car.brand
  )}&modelo=${encodeURIComponent(car.model)}&ano=${encodeURIComponent(
    car.year
  )}&cor=${encodeURIComponent(car.color)}&preco=${encodeURIComponent(
    car.price
  )}&cambio=${encodeURIComponent(car.transmission)}`

  return (
    <section className="mx-auto max-w-7xl px-6 py-40 text-white md:px-10">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <CarGallery images={car.images} model={car.model} />

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
            <h2 className="text-2xl font-semibold">Descrição</h2>

            <p className="mt-4 leading-7 text-white/68">{car.description}</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-white/45">
            {car.brand}
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            {car.model}
          </h1>

          <p className="mt-6 text-3xl font-medium text-white">{car.price}</p>

          <div className="mt-8 space-y-4 border-t border-white/10 pt-8">
            <div className="flex items-center justify-between text-sm text-white/70">
              <span>Quilometragem</span>
              <span className="text-white">{car.km}</span>
            </div>

            <div className="flex items-center justify-between text-sm text-white/70">
              <span>Transmissão</span>
              <span className="text-white">{car.transmission}</span>
            </div>

            <div className="flex items-center justify-between text-sm text-white/70">
              <span>Combustível</span>
              <span className="text-white">{car.fuel}</span>
            </div>

            <div className="flex items-center justify-between text-sm text-white/70">
              <span>Cor</span>
              <span className="text-white">{car.color}</span>
            </div>

            <div className="flex items-center justify-between text-sm text-white/70">
              <span>Potência</span>
              <span className="text-white">{car.power}</span>
            </div>
          </div>

          <div className="mt-8 border-t border-white/10 pt-8">
            <h3 className="text-lg font-semibold">Opcionais</h3>

            <ul className="mt-4 space-y-3 text-sm text-white/68">
              {car.features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col gap-4">
            <Link
              href={fichaHref}
              className="w-full rounded-full bg-red-600 px-6 py-4 text-center text-sm font-semibold tracking-wide text-white transition hover:bg-red-500"
            >
              Tenho interesse
            </Link>

            <a
              href={`https://wa.me/5511985995549?text=${encodeURIComponent(
                `Olá! Tenho interesse no ${car.brand} ${car.model}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-full border border-white/20 bg-white/5 px-6 py-4 text-center text-sm font-semibold tracking-wide text-white backdrop-blur-sm transition hover:bg-white hover:text-black"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
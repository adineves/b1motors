"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cars } from "../../data/cars";

export default function CarrosPage() {
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [body, setBody] = useState("");

  const brands = [...new Set(cars.map((car) => car.brand))].sort();

  const years = [...new Set(cars.map((car) => car.year))].sort(
    (a, b) => Number(b) - Number(a)
  );

  const bodies = [...new Set(cars.map((car) => car.body))].sort();

  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      const matchesBrand = brand ? car.brand === brand : true;
      const matchesYear = year ? car.year === year : true;
      const matchesBody = body ? car.body === body : true;

      const numericPrice = Number(car.price.replace(/[^\d]/g, ""));

      const matchesPrice =
        price === "ate-50000"
          ? numericPrice <= 5000000
          : price === "ate-100000"
          ? numericPrice <= 10000000
          : price === "ate-200000"
          ? numericPrice <= 20000000
          : price === "acima-200000"
          ? numericPrice > 20000000
          : true;

      return matchesBrand && matchesYear && matchesBody && matchesPrice;
    });
  }, [brand, year, price, body]);

  function clearFilters() {
    setBrand("");
    setYear("");
    setPrice("");
    setBody("");
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-40 text-white md:px-10">
      <div className="mb-12">
        <p className="text-xs tracking-[0.34em] text-white/45">ESTOQUE</p>

        <h1 className="mt-3 text-4xl font-semibold md:text-6xl">
          Veículos disponíveis
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
          Explore o estoque da B1 Motors com uma navegação mais refinada,
          focada em presença, escolha e experiência.
        </p>
      </div>

      <div className="mb-10 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none"
          >
            <option value="">Marca</option>
            {brands.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none"
          >
            <option value="">Ano</option>
            {years.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none"
          >
            <option value="">Preço</option>
            <option value="ate-50000">Até R$ 50 mil</option>
            <option value="ate-100000">Até R$ 100 mil</option>
            <option value="ate-200000">Até R$ 200 mil</option>
            <option value="acima-200000">Acima de R$ 200 mil</option>
          </select>

          <select
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none"
          >
            <option value="">Carroceria</option>
            {bodies.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <button
            onClick={clearFilters}
            className="rounded-xl bg-red-600 px-4 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-red-500"
          >
            LIMPAR
          </button>
        </div>
      </div>

      <div className="mb-6 text-sm text-white/50">
        {filteredCars.length} veículo(s) encontrado(s)
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCars.map((car) => (
          <Link
            key={car.id}
            href={`/carros/${car.slug}`}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-red-500/50 hover:shadow-[0_0_25px_rgba(220,38,38,0.10)]"
          >
            <div className="relative h-60 overflow-hidden bg-zinc-800">
              <img
                src={car.images?.[0]}
                alt={car.model}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                style={{ objectPosition: car.imagePosition || "center 30%" }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
            </div>

            <div className="space-y-3 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                {car.brand}
              </p>

              <h3 className="text-lg font-semibold">{car.model}</h3>

              <p className="text-sm text-white/60">{car.km}</p>

              <p className="text-lg font-medium">{car.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
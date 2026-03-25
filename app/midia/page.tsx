const mediaImages = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80",
];

export default function MidiaPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-40 text-white md:px-10">
      <div className="mb-12">
        <p className="text-xs tracking-[0.34em] text-white/45">MÍDIA</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
          Galeria com direção mais editorial
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
          Um espaço visual pensado para valorizar presença, estética e a identidade
          da B1 Motors com uma linguagem mais refinada.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {mediaImages.map((image, index) => (
          <div
            key={index}
            className={`group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:border-red-500/40 hover:shadow-[0_0_24px_rgba(220,38,38,0.10)] ${
              index === 0 ? "xl:col-span-2" : ""
            }`}
          >
            <img
              src={image}
              alt={`Mídia ${index + 1}`}
              className="aspect-video h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
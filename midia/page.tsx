const mediaImages = [
  "https://i.postimg.cc/y6fVJfBq/320i_1.jpg",
  "https://i.postimg.cc/c1Vxppz6/bmw_x1_1.jpg",
  "https://i.postimg.cc/KYqFJwLx/celta1.jpg",
  "https://i.postimg.cc/kG8mM5H4/montana_premier1.jpg",
  "https://i.postimg.cc/qMMHg8Wb/hyundai_creta_1.jpg",
  "https://i.postimg.cc/RhN0DBhh/hb20_1.jpg",
  "https://i.postimg.cc/d1QP5j31/hb20s_1.jpg",
  "https://i.postimg.cc/B6Fkx1Z5/jeep_compass_(5).jpg",
  "https://i.postimg.cc/tgBPg1th/mustang_gt1.jpg",
  "https://i.postimg.cc/VkHVpFd0/toyota_corolla_(9).jpg"
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
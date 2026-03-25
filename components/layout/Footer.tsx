import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="text-2xl font-black italic tracking-tight">
              <span className="text-white">B</span>
              <span className="text-red-600">1</span>
              <span className="text-white"> MOTORS</span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-7 text-white/55">
              Uma presença digital premium para valorizar a marca, o estoque e a experiência do cliente.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] text-white/45">MENU</p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <Link href="/" className="block hover:text-white">Home</Link>
              <Link href="/carros" className="block hover:text-white">Carros</Link>
              <Link href="/midia" className="block hover:text-white">Mídia</Link>
              <Link href="/sobre" className="block hover:text-white">Sobre</Link>
              <Link href="/contato" className="block hover:text-white">Contato</Link>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] text-white/45">CONTATO</p>

            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p>(11) 98599-5549</p>
              <p>Rua Santos Dumont, 797</p>
              <p>Ferraz de Vasonceloss - São Paulo</p>
              <p>Seg a Sex: 9h às 20h</p>
              <p>Sábado: 9h às 20h</p>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.3em] text-white/45">REDES</p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
              <a
                href="https://instagram.com/b1motors_"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://facebook.com/SEUFACEBOOK"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                Facebook
              </a>

              <a
                href="https://wa.me/5511985995549"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p>B1 Motors © {new Date().getFullYear()}</p>

          <p>
            Desenvolvido por{" "}
            <a
              href="https://adler-neves.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 transition hover:text-white"
            >
              Adler Neves
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
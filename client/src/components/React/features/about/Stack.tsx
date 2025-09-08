
interface Logos {
    src: string,
    alt: string
}

const logos: Logos[] = [
  { src: "/images/logos/typescript.svg", alt: "TypeScript Logo" },
  { src: "/images/logos/astro.svg", alt: "Astro.js Logo" },
  { src: "/images/logos/react.svg", alt: "React Logo" },
  { src: "/images/logos/nodedotjs.svg", alt: "Node.js Logo" },
   { src: "/images/logos/express.svg", alt: "Express.js Logo" },
];

const third_parties: Logos[] = [
  { src: "/images/logos/framer.svg", alt: "Framer-Motion Logo" },
  { src: "/images/logos/lottiefiles.svg", alt: "Lottiefiles Logo" },
  { src: "/images/logos/Bing.svg", alt: "Bing Logo" },
  { src: "/images/logos/supabase.svg", alt: "Supabase Logo" },
   { src: "/images/logos/rapid.svg", alt: "Rapid API Logo" },
];

export default function Stack () {
  return (
    <section className="lg:p-8">
      <div className="mx-auto 2xl:max-w-7xl py-12 lg:px-16 md:px-12 px-8 xl:px-36 items-center relative w-full">
        <div className="pb-12 border-b border-white/10">
          <span className="text-blue-400">Technologies</span>
          <h2 className="text-xl mt-6 tracking-tight font-light text-white">
            Leveraging modern tools{' '}
            <span className="block text-zinc-400">trusted by developers to ship fast, user-friendly experiences</span>
          </h2>
        </div>
        <div className="flow-root mt-6">
          <div className="-ml-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:-ml-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="mt-4 ml-8 flex flex-shrink-0 flex-grow items-center justify-center lg:ml-4 lg:flex-grow-0"
              >
                <img src={logo.src} alt={logo.alt} className="h-16 w-auto" />
              </div>
            ))}
          </div>
        </div>
          <div className="flow-root mt-6">
          <div className="-ml-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:-ml-4">
            {third_parties.map((logo, index) => (
              <div
                key={index}
                className="mt-4 ml-8 flex flex-shrink-0 flex-grow items-center justify-center lg:ml-4 lg:flex-grow-0"
              >
                <img src={logo.src} alt={logo.alt} className="h-16 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};







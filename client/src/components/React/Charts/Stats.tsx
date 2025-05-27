import { useEffect, useRef, useState } from "react";

function StatItem({ label, target }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasStarted.current) {
        hasStarted.current = true;
        let current = 0;
        const interval = setInterval(() => {
          if (current < target) {
            current += 1;
            setCount(current);
          } else {
            clearInterval(interval);
          }
        }, 50);
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [target]);

  return (
    <div className="flex flex-col gap-y-3 lg:border-l border-white/30 pl-6" ref={ref}>
      <dt className="mt-2 text-sm text-white">{label}</dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-white">
        {count}%
      </dd>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="lg:p-8">
      <div className="mx-auto w-full 2xl:max-w-7xl">
        <div className="2xl:max-w-7xl  relative isolate overflow-hidden bg-gradientup ring-1 ring-white/10 rounded-4xl px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <span className="text-white">Investigation Statistics</span>
            <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
              Your research{" "}
              <span className="block text-zinc-300">by the numbers</span>
            </h2>
            <p className="mt-6 text-sm text-white">
            See how your thinking shifts over time — whether you change your mind, confirm a belief, stay neutral, or need more info. These insights reveal your patterns in processing evidence and forming opinions.
            </p>
            <dl className="mt-12 grid max-w-xl grid-cols-1 gap-8 sm:grid-cols-2">
              <StatItem label="Changed Opinion" target={20} />
              <StatItem label="Validated your POV" target={34} />
              <StatItem label="Remained Neutral" target={40} />
              <StatItem label="Needed more information" target={20} />
            </dl>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none shadow-thick opacity-50 border border-white/10 rounded-3xl"
              src="/images/assets/darkcode.svg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

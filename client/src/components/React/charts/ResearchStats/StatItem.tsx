import { useEffect, useRef, useState } from "react";

export default function StatItem({ label, target }) {
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



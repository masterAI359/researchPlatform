import { ScrollUp } from "@/helpers/ScrollToTop"
import { useEffect } from "react"

type DisplayProps = {
    children: React.ReactNode
};

export default function DisplayLoader({ children }: DisplayProps): JSX.Element {

    useEffect(() => {

        ScrollUp();
    }, []);

    return (
        <section
            aria-busy="true"
            aria-live="polite"
            className="absolute inset-0 flex items-center justify-center animate-fade-in"
        >
            <div
                className="h-full w-full rounded-xl  flex items-center justify-center"
            >
                {children}
            </div>
        </section>
    );
};
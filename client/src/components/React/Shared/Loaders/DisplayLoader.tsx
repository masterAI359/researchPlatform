import { ScrollUp } from "@/helpers/ScrollToTop"
import { useEffect } from "react"


export default function DisplayLoader({ children }): JSX.Element {

    useEffect(() => {

        ScrollUp();
    }, []);

    return (
        <section className="absolute inset-0 flex items-center justify-center animate-fade-in">
            <div className="h-full w-full rounded-xl  flex items-center justify-center">
                {children}
            </div>
        </section>
    );
};
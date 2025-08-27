

export default function DisplayLoader({ children }): JSX.Element {

    return (
        <section className="w-full h-dvh flex items-center justify-center animate-fade-in">
            <div className="h-full w-full rounded-xl  flex items-center justify-center">
                {children}
            </div>
        </section>
    )
}

//bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)]
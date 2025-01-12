


export default function LostConnection({ errorMessage }) {


    return (
        <div className="z-50 absolute top-12 bg-ebony rounded-4xl p-10 flex flex-col animate-fade-in">
            <header className="w-4/5 mx-auto h-full">
                <h1 className="text-white md:text-4xl font-light tracking-tight">
                    {errorMessage}
                </h1>
            </header>
            <main className="w-4/5 h-full mx-auto">
                <button className="rounded-3xl p-4 text-white bg-white/10">
                    Retry Connection
                </button>
            </main>
        </div>
    )
}
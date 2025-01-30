import Search from "../Investigate/Steps/Search"

export default function SearchHero({

}) {

    return (
        <section
            className="w-full h-auto mx-auto flex xs:flex-col xs:mt-10 2xl:mt-0 border-b border-white/10">
            <main className="xs:w-4/5 xl:w-2/5 h-auto xs:mx-auto xs:mt-6 xl:mt-24">
                <Search
                />
            </main>

        </section>
    )
}
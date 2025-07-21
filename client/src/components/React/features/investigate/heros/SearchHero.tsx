import Search from "../Evidence/searching/Search"

export default function SearchHero({

}) {

    return (
        <section
            className="min-w-88 sm:min-w-full h-auto mx-auto flex flex-col mt-10 mb-4 2xl:mt-0 border-b border-white/10">
            <main className="w-72 max-w-168 sm:w-4/5 xl:w-2/5 h-auto xs:mx-auto mb-2 xs:mt-6 xl:mt-24">
                <Search
                />
            </main>

        </section>
    )
}
import Search from "../Evidence/searching/components/input/Search"

export default function SearchHero(): JSX.Element {

    return (
        <section
            className="min-w-88 sm:min-w-full h-auto mx-auto flex flex-col mt-10 2xl:mt-0 border-b border-white/10">
            <main className="w-72 max-w-168 sm:w-4/5 xl:w-2/5 h-auto xs:mx-auto mb-2 xl:mt-16">
                <Search
                />
            </main>
        </section>
    );
};
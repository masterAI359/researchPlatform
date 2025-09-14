import Search from "../phase2/search/containers/Search";

export default function SearchHero(): JSX.Element {

    return (
        <section
            className="w-full max-w-168 sm:w-4/5 xl:w-2/5 sm:min-w-full 
            h-auto mx-auto flex items-center justify-center 2xl:mt-0 border-b
            border-white/10">
            <main
                className="w-80 sm:w-full h-auto mb-2 mt-12 md:mt-16">
                <Search
                />
            </main>
        </section>
    );
};
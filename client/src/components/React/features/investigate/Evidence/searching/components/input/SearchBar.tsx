import SearchButton from "../buttons/SearchButton";

export default function SearchBar({ getSearchInput, handleSubmit, empty }) {

    return (
        <form
            className="bg-white/10 hover:bg-white/15
            transition-all duration-200 ease-in-out text-white w-full h-fit 
            border-none md:h-10 md:p-0 2xl:px-1 rounded-full relative
            xs:text-sm md:text-lg flex items-center prose"
            onSubmit={(e) => handleSubmit(e)}
        >
            <input
                autoFocus
                onChange={(e) => getSearchInput(e)}
                autoComplete="off"
                type="text"
                name="q"
                className="bg-transparent text-white w-full
               border-none h-12 xs:p-3  md:p-2 rounded-full relative focus:ring-0
               transition-colors text-base md:text-lg flex items-center"
                placeholder="search" />
            <SearchButton empty={empty} />
        </form>
    );
};

import React from "react";
import SearchButton from "../buttons/SearchButton";

interface SearchBarProps {
    getSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    flush: (val: string) => void,
    commit?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export default function SearchBar({ getSearchInput, handleSubmit, flush }: SearchBarProps): JSX.Element {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const composing = (e.nativeEvent as KeyboardEvent).isComposing;
        if (composing) return;
        if (e.key === "Enter") {
            e.preventDefault();
            flush(e.currentTarget.value);
        }
    };

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
                onBlur={(e) => flush(e.currentTarget.value)}
                onKeyDown={(e) => handleKeyDown}
                autoComplete="off"
                type="text"
                name="q"
                className="bg-transparent text-white w-full
               border-none h-9 md:h-12 xs:p-3  md:p-2 rounded-full relative focus:ring-0
               transition-colors text-base md:text-lg flex items-center"
                placeholder="search for articles" />
            <SearchButton />
        </form>
    );
};
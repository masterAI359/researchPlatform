import Loader from "@/components/React/Shared/Loaders/Loader";
import SearchIcon from "@/components/React/Shared/IconComponents/SearchIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { AppDispatch } from "@/ReduxToolKit/store";
import { useState } from "react";
import { searchBlueSky } from "@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice";

export default function SearchBlueSky() {
    const status = useSelector((state: RootState) => state.bluesky.status);
    const dispatch = useDispatch<AppDispatch>();
    const [postQuery, setPostQuery] = useState<string>(null);
    const encodedQuery = encodeURIComponent(postQuery);
    const queried = new CustomEvent('newSearch');

    const retrieveInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target.value;
        setPostQuery(target)
    }

    const submitForPosts = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        window.dispatchEvent(queried);
        if (encodedQuery) {
            dispatch(searchBlueSky(encodedQuery));
        } else {
            window.alert('You need to type a query to search!');
        }
    }

    return (
        <div
            className="relative flex w-fit items-center px-1">
            <form
                className="bg-white/10 text-white w-full h-fit
                         border-none md:h-10 md:p-0 2xl:px-0 rounded-full relative
                         transition-colors xs:text-sm md:text-lg flex items-center prose"
            >
                <input
                    onChange={(e) => retrieveInput(e)}
                    autoComplete="off"
                    type="text"
                    name="q"
                    className="bg-transparent text-white max-w-44 lg:max-w-full lg:w-52 h-fit 
                         border-none md:h-12 p-2 rounded-full relative focus:ring-0
                         transition-colors text-base md:text-lg font-light flex items-center placeholder-slate-300"
                    placeholder="search BlueSky" />
                <button
                    onClick={(e) => submitForPosts(e)}
                    type="submit"
                    className="relative pr-2 grow-0"
                >
                    {
                        status === 'pending'
                            ? <Loader />
                            : <SearchIcon />
                    }
                </button>
            </form>
        </div>
    );
};
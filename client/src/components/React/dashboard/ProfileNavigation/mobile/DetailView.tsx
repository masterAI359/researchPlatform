import { createPortal } from "react-dom";
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/ReduxToolKit/store";

export default function DetailView({ backTo }): JSX.Element {
    const dispatch = useDispatch<AppDispatch>();


    const detailView = (
        <div
            onClick={() => { dispatch(backTo()) }}
            aria-label="detail view on saved article"
            className="fixed bottom-0 z-40 py-4 w-full px-4 backdrop-blur-xl bg-white/5 md:hover:bg-white/15 transition-all duration-200 ease-in-out backdrop-filter shadow-thick"
        >
            <button
                aria-label="back to saved articles"
                className="w-full h-full flex items-center justify-start md:justify-center gap-x-4">
                <div className="w-auto h-auto">
                    <DetailViewArrow />
                </div>
                <div className="w-auto h-auto">
                    <p className="text-white">
                        Back
                    </p>
                </div>
            </button>

        </div>
    );

    return createPortal(detailView, document.body);
};


function DetailViewArrow(): React.ReactNode {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left text-white"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>

    )
}
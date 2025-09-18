import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { InvestigateState } from "@/ReduxToolKit/Reducers/Root/InvestigateReducer";

export default function ExtractError(): JSX.Element {
    const investigate: InvestigateState = useSelector((state: RootState) => state.investigation);
    const { errormessage } = investigate.wiki;
    if (!errormessage) return null;

    return (
        <div className="w-full h-24 p-2 flex items-center justify-center">
            <div className="w-full h-auto">
                <p className="text-white text-center font-light tracking-tight text-base">
                    {errormessage && "Couldn't retrieve an extract for the selected term"}
                </p>
            </div>
        </div>
    );

};
import POVIcon from "../components/POVIcon";
import BulbIcon from "../components/BulbIcon";
import BiasIcon from "../components/BiasIcon";
import PremiseIcon from "../components/PremiseIcon";
import SearchIcon from "../components/SearchIcon";


interface IconProps {
    thisStep: number
};

export default function NodeIcon({ thisStep }: IconProps): JSX.Element {

    return (
        <div className="text-white max-w-7 max-h-7 sm:max-w-9 sm:max-h-9
        sm:p-1  shrink-0 z-10 xs:p-0.5 md:p-1 box-border"
        >
            {thisStep === 0 && <BulbIcon />}
            {thisStep === 1 && <POVIcon />}
            {thisStep === 2 && <BiasIcon />}
            {thisStep === 3 && <PremiseIcon />}
            {thisStep === 4 && <SearchIcon />}
        </div>
    );
};
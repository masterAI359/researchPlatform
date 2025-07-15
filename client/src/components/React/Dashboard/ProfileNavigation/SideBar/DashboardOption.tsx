import { AppDispatch } from "@/ReduxToolKit/store";
import { useDispatch } from "react-redux";

export default function DashboardOption({ name, actionCreator, activeCondition, children }: DashboardOption) {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <li className="cursor-pointer w-full"
            onClick={() => dispatch(actionCreator())}
        >
            <div className={`
            flex items-center p-2 text-gray-900 rounded-lg dark:text-white w-full
            hover:bg-white/10 group transition-all duration-200 ease-in-out
            ${activeCondition && 'bg-white/10'}`
            }>
                {children}
                <span className="ms-3 text-white xl:text-base md:text-sm font-light">{name}</span>
            </div>
        </li>
    );
};
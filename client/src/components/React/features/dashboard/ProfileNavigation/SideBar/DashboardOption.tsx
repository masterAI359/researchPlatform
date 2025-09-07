import { AppDispatch } from "@/ReduxToolKit/store";
import { useDispatch } from "react-redux";
import React from "react";

function DashboardOption({ name, actionCreator, activeCondition, children }: DashboardOption) {
    const dispatch = useDispatch<AppDispatch>();

    const handleClick = (activeCondition: boolean) => {
        if (!activeCondition) {
            dispatch(actionCreator());
        };
    };

    return (
        <li className="cursor-pointer w-full"
            onClick={() => handleClick(activeCondition)}
        >
            <div className={`
            flex items-center p-2 text-gray-900 rounded-lg dark:text-white w-full
            hover:bg-white/10 group transition-all duration-200 ease-in-out
            ${activeCondition ? 'bg-white/10' : ''}`
            }>
                {children}
                <span className="ms-3 text-white xl:text-base md:text-sm font-light">{name}</span>
            </div>
        </li>
    );
};

export default React.memo(DashboardOption, (prev, next) =>
    prev.activeCondition === next.activeCondition &&
    prev.name === next.name &&
    prev.actionCreator === next.actionCreator &&
    prev.children === next.children
);
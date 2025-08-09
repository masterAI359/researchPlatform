import { limitString } from "@/helpers/Presentation";
import { SidebarItemData } from "@/env";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";

export default function SidebarItem({ item }: { item: SidebarItemData }) {
    const state = useSelector((state: RootState) => state.investigation);
    const { step } = state.stepper
    const formatted = (item.data) && (item.data.length > 50)
        ? limitString(item.data)
        : item.data || "";

    return (
        <li className="w-full h-fit">
            <div className="flex flex-col gap-y-2">
                <div className={`${step === (item.step - 1)
                    ? 'text-blue-400'
                    : 'text-white'
                    } 
                transition-all duration-200 ease-in-out
                text-left text-sm`}
                >
                    {item.title}<span className="text-white"> -</span> <span className="text-zinc-400">
                        {item.data ? formatted : null}
                    </span>
                </div>
                {item.titleTwo && (
                    <div className={`
                        ${step === (item.step - 1)
                            ? 'text-blue-400'
                            : 'text-white'
                        } 
                        transition-all duration-200 ease-in-out
                     text-left text-sm text-nowrap`}>
                        {item.titleTwo} <span className="text-white"> -</span> <span className="text-zinc-400">
                            {item.dataTwo ? item.dataTwo : null}
                        </span>
                    </div>
                )}
            </div>
        </li>
    );
};
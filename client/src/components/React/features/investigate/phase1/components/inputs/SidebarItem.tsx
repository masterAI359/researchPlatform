import { limitString } from "@/helpers/Presentation";
import { SidebarItemData } from "@/env";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { InvestigateState } from "@/ReduxToolKit/Reducers/Root/InvestigateReducer";
import { useEffect, useState } from "react";

export default function SidebarItem({ item }: { item: SidebarItemData }) {
    const state: InvestigateState = useSelector((state: RootState) => state.investigation);
    const { step } = state.stepper;
    const [hasInput, setHasInput] = useState<boolean>(item.data ? true : false);

    useEffect(() => {

        if (item.data) {
            setHasInput(true);
        } else {
            setHasInput(false)
        }

    }, [item.data])

    return (
        <li className={`${(item.step - 1) === step ? 'bg-white/5' : 'bg-black/60'}
         w-full h-fit flex items-center overflow-hidden rounded-xl p-1 relative`}>
            <HasInput hasInput={hasInput} />
            <ItemText data={item.data} title={item.title} itemStep={item.step} />
            {item.step === 2 && <ItemText title={item.titleTwo} data={item.dataTwo} itemStep={item.step} />}
        </li>
    );
};


function ItemText({ title, data, itemStep }): JSX.Element | null {
    const state: InvestigateState = useSelector((state: RootState) => state.investigation);
    const { step } = state.stepper;
    const formatted: string = (data) && (data.length > 50)
        ? limitString(data, 100)
        : data || "";


    return (
        <div className={`${itemStep === 2 ? 'w-full items-center' : 'basis-full'} 2xl:h-[68px] xl:h-[68px] lg:h-[64px] md:h-[54px] flex flex-col gap-y-2`}>
            <div className={`
                transition-all duration-200 ease-in-out overflow-hidden p-0.5
                `}
            >

                <p className={` ${step === (itemStep - 1)
                    ? 'text-blue-400'
                    : 'text-blue-400'
                    } 
                    ${itemStep === 2 ? 'text-center' : 'text-center'}
                 md:text-sm xl:text-base tracking-tight`}>
                    {title}
                </p>
                <p className={`${itemStep === 2 ? 'text-center' : 'text-center'}
                ${`${formatted ? 'text-white/80' : 'text-zinc-500'}`}
                  font-light tracking-tight md:text-xs xl:text-sm`}>
                    {data
                        ? formatted
                        : 'awaiting input'}
                </p>
            </div>
        </div>
    );
};



function HasInput({ hasInput }): JSX.Element | null {

    return (
        <div aria-hidden="true" className="pointer-events-none absolute top-0.5 right-1 w-5 h-5 flex items-center justify-center rounded-full overflow-hidden text-green-400">
            {hasInput
                ? <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>

                : null}
        </div>
    )
}
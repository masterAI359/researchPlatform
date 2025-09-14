import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import SidebarItem from "../components/inputs/SidebarItem";
import { SidebarItemData } from "@/env";

export default function PerspectiveSidebar() {
    const investigation = useSelector((state: RootState) => state.investigation);
    const { pov } = investigation;
    const { idea, perspective, expertise, biases, premises } = pov;

    const items: SidebarItemData[] = [
        { title: 'Idea', data: idea, step: 1 },
        { title: 'Perspective', data: perspective, step: 2, titleTwo: 'Prior Knowledge', dataTwo: expertise },
        { title: 'Biases', data: biases, step: 3 },
        { title: 'Premises', data: premises, step: 4 }
    ];

    return (
        <section className={`mx-auto w-full relative h-full`}>
            <main className="rounded-4xl bg-ebony/50 shadow-inset h-full w-full flex flex-col shrink-0 items-center py-4 
            md:w-[16.5rem] md:h-80 2xl:w-96 xl:w-88 lg:w-80 lg:h-88 xl:h-88 2xl:h-96">
                <header className="w-4/5">
                    <div className="w-full">
                        <div className="w-fit mx-auto">
                            <h1 className="2xl:text-3xl md:text-2xl sm:text-xl text-sm tracking-tight text-center font-light text-zinc-400 pb-1">
                                Your Framework
                            </h1>
                        </div>
                    </div>
                </header>
                <ul className="grid grid-cols-1 items-center justify-center h-full xl:h-3/4 w-4/5 mx-auto divide-y divide-white/20">
                    {items.map((item) => (
                        <SidebarItem key={item.title} item={item} />
                    ))}
                </ul>
            </main>
        </section>
    );
};


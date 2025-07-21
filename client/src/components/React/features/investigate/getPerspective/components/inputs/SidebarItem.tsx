import { limitString } from "@/helpers/Presentation";
import { SidebarItemData } from "@/env";

export default function SidebarItem({ item }: { item: SidebarItemData }) {

    const formatted = (item.data) && (item.data.length > 50)
        ? limitString(item.data)
        : item.data || "";

    return (
        <li className="w-full h-fit">
            <div className="flex flex-col gap-y-2">
                <div>
                    <p className="text-white text-left text-sm">
                        {item.title}: <span className="text-zinc-400">
                            {item.data ? formatted : null}
                        </span>
                    </p>
                </div>

                {item.titleTwo && (
                    <div>
                        <p className="text-white text-left text-sm text-nowrap">
                            {item.titleTwo}: <span className="text-zinc-400">
                                {item.dataTwo ? item.dataTwo : null}
                            </span>
                        </p>
                    </div>
                )}
            </div>
        </li>
    );
};
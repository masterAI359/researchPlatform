import { RootState } from "@/ReduxToolKit/store"
import { useSelector } from "react-redux"
import { limitName } from "@/helpers/Presentation";


export default function Author({ post }): React.ReactNode {
    const selected = useSelector((state: RootState) => state.bluesky.selected);
    const handle: string = limitName(post.author.handle);

    return (
        <div className="flex flex-col items-center h-full">
            <div className={`text-base font-light leading-6 w-full h-auto ${post.record.text === selected ? 'text-black' : 'text-white'}`}>
                {post.author.displayName}
            </div>
            <div className={`text-xs font-light leading-6 w-full h-auto ${post.record.text === selected ? 'text-black' : 'text-white'}`}>
                <em>
                    @{handle}
                </em>
            </div>
        </div>
    );
};
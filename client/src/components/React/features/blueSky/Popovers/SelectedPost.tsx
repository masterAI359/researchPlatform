import { useEffect } from "react";
import { BSPost } from "../Components/BSPost";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { getPopoverPost } from "@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice";

export default function SelectedPost(): JSX.Element {
    const popoverPost = useSelector((state: RootState) => state.bluesky.popoverPost);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {

        return () => {
            //   dispatch(getPopoverPost(null));
        }
    }, []);


    return (
        <div className="relative 2xl:w-[26rem] md:w-96 w-80 h-fit">
            <BSPost post={popoverPost} />
        </div>
    )
}
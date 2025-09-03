import { RootState } from "@/ReduxToolKit/store";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";


export function useBodyLock() {
    const popoverPost = useSelector((state: RootState) => state.bluesky.popoverPost);
    const prevStyles = useRef<{ pos: string; top: string; width: string; pr: string }>();

    useEffect(() => {
        if (!popoverPost) {
            document.body.classList.remove('overflow-hidden');
            return;
        };

        if (popoverPost) {
            document.body.classList.add('overflow-hidden');

        }

        //    const scrollY: number = window.scrollY;
        //    const scrollBarWidth: number = window.innerWidth - document.documentElement.clientWidth;
        //
        //    prevStyles.current = {
        //        pos: document.body.style.position,
        //        top: document.body.style.top,
        //        width: document.body.style.width,
        //        pr: document.body.style.paddingRight,
        //    };
        //
        //
        //    document.body.style.position = "fixed";
        //    document.body.style.top = `-${scrollY}px`;
        //    document.body.style.width = "100%";
        //
        //    if (scrollBarWidth > 0) document.body.style.paddingRight = `${scrollBarWidth}px`;
        //
        //    document.documentElement.classList.add('overscroll-contain');
        //
        //    return () => {
        //        const targetY = -parseInt(document.body.style.top || "0", 10) || 0;
        //
        //        document.body.style.position = prevStyles.current!.pos;
        //        document.body.style.top = prevStyles.current!.top;
        //        document.body.style.width = prevStyles.current!.width;
        //        document.body.style.paddingRight = prevStyles.current!.pr;
        //
        //        window.scrollTo(0, targetY);
        //
        //    };
        //
    }, [popoverPost])
} 
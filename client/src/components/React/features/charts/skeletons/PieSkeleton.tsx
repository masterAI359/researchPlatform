import { useEffect, useState } from "react";


export default function PieSkeleton() {
    const message: string = 'loading...';
    const [typed, setTyped] = useState<string>("");
    const [currIndex, setCurrIndex] = useState<number>(0);

    useEffect(() => {

        const typeNextChar = (): void => {
            setTyped(prev => prev + message[currIndex]);
            setCurrIndex(prev => prev + 1);
        };

        const interval = setInterval(() => {
            if (currIndex < message.length) {
                typeNextChar();
            } else {
                setTyped("");
                setCurrIndex(0);
            };
        }, 300);

        return () => {
            clearInterval(interval);
        };

    }, [currIndex]);


    return (

        <div className="relative w-72 h-72 lg:w-88 lg:h-88 animate-pulse">
            <div className="absolute inset-0 rounded-full bg-zinc-800/60" />

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/5 h-[2px] bg-zinc-700 rotate-0 absolute" />
                <div className="w-3/5 h-[2px] bg-zinc-700 rotate-45 absolute" />
                <div className="w-3/5 h-[2px] bg-zinc-700 -rotate-45 absolute" />
                <div className="w-3/5 h-[2px] bg-zinc-700 rotate-90 absolute" />
            </div>

            <div className="absolute -bottom-8 left-1/2 w-32 h-6 -translate-x-1/2 mt-4">
                <p className="text-zinc-400 font-light tracking-tight text-sm text-center">
                    {typed}
                </p>
            </div>
        </div>
    );
};
import Tabs from "./Tabs";
import React from "react";

function Display() {

    return (
        <main
            className="opacity-0 animate-fade-in animation-delay-300ms
            w-full relative h-full min-h-dvh px-4 
            md:px-6 lg:px-0 mx-auto flex items-start justify-center
        ">


            <Tabs />

        </main>
    );
};


export default React.memo(Display);
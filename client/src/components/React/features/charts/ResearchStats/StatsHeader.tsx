import React from "react";


function StatsHeader(): JSX.Element | null {


    return (
        <>
            <span className="text-white">Investigation Statistics</span>
            <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                Your research{" "}
                <span className="block text-zinc-300">by the numbers</span>
            </h2>
            <p className="mt-6 text-sm text-white">
                See how your thinking shifts over time — whether you change your mind, confirm a belief, stay neutral, or need more info. These insights reveal your patterns in processing evidence and forming opinions.
            </p>
            <p className="mt-6 text-sm text-white">
                Over all of your investigations:
            </p>
        </>
    );
};


export default React.memo(StatsHeader);
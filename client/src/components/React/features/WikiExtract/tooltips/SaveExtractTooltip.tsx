


export default function SaveExtractTooltip(): JSX.Element | null {

    return (
        <div className="rounded-md xl:h-fit md:w-24 flex xs:hidden md:block 
                mx-auto group-hover:bg-white opacity-0 absolute md:-left-24 top-3
                border border-gray group-hover:opacity-100 transition-all 
                z-50 duration-200 ease-in-out">

            <h1 className="text-black xl:text-sm xl:p-1 font-light tracking-tight text-center w-full">
                save extract
            </h1>
        </div>
    );
};
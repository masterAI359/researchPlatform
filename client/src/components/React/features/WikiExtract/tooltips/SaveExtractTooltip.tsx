
interface SaveExtractTooltip {
    saved?: boolean,
    saving: boolean
};

export default function SaveExtractTooltip({ saved, saving }: SaveExtractTooltip): JSX.Element | null {
    const tooltip: string | null = saved ? 'remove' : 'save extract';
    if (saving) return null;

    return (
        <div className={`rounded-md xl:h-fit md:w-24 block 
                mx-auto bg-white opacity-0 absolute md:-left-24 top-3
                border border-gray shadow-material
                ${!saving ? 'md:group-hover:opacity-100 delay-300 transition-opacity' : ''}
                
                z-50 duration-200 ease-in-out`}>

            <h1 className="text-black xl:text-sm xl:p-1 font-light tracking-tight text-center w-full">
                {tooltip}
            </h1>
        </div>
    );
};
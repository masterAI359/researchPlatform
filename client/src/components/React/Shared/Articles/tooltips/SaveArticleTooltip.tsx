
interface TooltipProperties {
    isSaved: boolean | null
};

export default function SaveArticleTooltip({ isSaved }: TooltipProperties) {
    const message = isSaved ? 'remove' : 'save article';

    return (
        <div
            className="rounded-md xl:h-fit md:w-24 flex xs:hidden md:block 
                mx-auto group-hover:bg-white bg-white opacity-0 absolute md:right-9
                border border-black/20 group-hover:opacity-100 transition-all 
                z-50 duration-200 ease-in-out">
            <h1
                className="text-black xl:text-sm xl:p-1 font-light 
                tracking-tight justify-self-start text-center w-full">
                {message}
            </h1>

            <div
                className="absolute top-1/2 -right-2 transform -translate-y-1/2"
                style={{
                    width: 0,
                    height: 0,
                    borderTop: '6px solid transparent',
                    borderBottom: '6px solid transparent',
                    borderLeft: '8px solid white'
                }}
            />
        </div>
    );
};
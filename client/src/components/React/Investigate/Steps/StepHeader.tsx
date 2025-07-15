import HelpButton from "../../Buttons/HelpButtons/Question"

interface StepHeader {
    title: string,
    subheader?: string,
    info: Help[]
}

export default function StepHeader({ title, subheader, info }) {

    return (
        <div
            className='w-full h-20 basis-4 relative
        text-center mx-auto box-border flex xs:px-2'>
            <div
                className="w-full box-border border-b h-fit border-white/10 mb-2 
            flex flex-row justify-between items-center">
                <div className="w-full flex justify-items-start flex-nowrap">
                    <h1 className="2xl:text-2xl md:text-2xl sm:text-xl text-sm 
                     tracking-tight font-light text-nowrap text-zinc-300 pb-1"
                    >{title}
                        <span className="text-zinc-500"
                        >{subheader ? subheader : null}
                        </span>
                    </h1>
                </div>
                <HelpButton info={info} />
            </div>
        </div>

    );
};
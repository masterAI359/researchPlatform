import fallback from '../../../../../../public/images/logos/airbnb.svg'


export default function PriorInvestigation({ investigation }) {



    return (
        <div className="md:flex w-full h-auto">
            <h2 id="2023-03-16-heading" className="pl-7 md:w-2/3 md:pl-0 text-sm font-light tracking-tight md:pr-6 text-white md:text-right">
                <span className='text-zinc-400'>From:</span> {investigation.created_at.split('').splice(0, 10).join('')}
            </h2>
            <div className="relative pt-2 pl-7 md:w-3/4 md:pt-0 md:pl-12 pb-16 md:pb-24">
                <div className="absolute bottom-0 left-0 w-px bg-white/20 -top-3 md:top-2.5">
                </div>
                <div className="absolute -top-[1.0625rem] -left-1 h-[0.5625rem] w-[0.5625rem] rounded-full border-2 border-black/10 bg-white md:top-[0.4375rem]">
                </div>
                <div className="flex flex-col items-center w-fit">
                    <div className='w-full'>
                        <img
                            src={`../../../../../../public/images/logos/fallback.jpg`}
                            className="rounded-2xl" />
                        <h3 className="text-white font-light tracking-tight text-md mt-8"><em>researched:</em></h3>
                        <p className="text-zinc-400 mt-4 text-md text-balance">
                            {investigation.idea}
                        </p>
                        <div className="mt-4 w-fit">
                            <button className="text-sm py-2 px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10
                            text-black duration-200 focus:ring-offset-2 focus:ring-black hover:text-white inline-flex items-center justify-center ring-1 ring-transparent">
                                Review
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}





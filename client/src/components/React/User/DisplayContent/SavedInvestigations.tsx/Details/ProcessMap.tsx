

export default function ProcessMap({ investigationDetails }) {


    return (
        <dl
            className="grid grid-cols-1 gap-12 mt-12 md:grid-cols-3 lg:space-y-0 lg:gap-24">
            {investigationDetails?.map((detail: any, index: number) => (
                <div key={index}>
                    <dt className="inline-flex items-center gap-3">
                        <div className="flex items-center text-white">
                            {detail.icon === "integration" && (
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bulb"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7" /><path d="M9 16a5 5 0 1 1 6 0a3.5 3.5 0 0 0 -1 3a2 2 0 0 1 -4 0a3.5 3.5 0 0 0 -1 -3" /><path d="M9.7 17l4.6 0" /></svg>

                            )}
                            {detail.icon === "customizable" && (

                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-perspective"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.141 4.163l12 1.714a1 1 0 0 1 .859 .99v10.266a1 1 0 0 1 -.859 .99l-12 1.714a1 1 0 0 1 -1.141 -.99v-13.694a1 1 0 0 1 1.141 -.99z" /></svg>


                            )}
                            {detail.icon === "tracking" && (
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-scale"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M7 20l10 0" /><path d="M6 6l6 -1l6 1" /><path d="M12 3l0 17" /><path d="M9 12l-3 -6l-3 6a3 3 0 0 0 6 0" /><path d="M21 12l-3 -6l-3 6a3 3 0 0 0 6 0" /></svg>

                            )}
                            {detail.icon === "scalable" && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-list-search"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 15m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M18.5 18.5l2.5 2.5" /><path d="M4 6h16" /><path d="M4 12h4" /><path d="M4 18h4" /></svg>
                            )}
                            {detail.icon === "reporting" && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-layers-subtract"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 4m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z" /><path d="M16 16v2a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" /></svg>
                            )}
                            {detail.icon === "secure" && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler size-5 icons-tabler-outline icon-tabler-asterisk">
                                    <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none" />
                                    <path d="M12 12l8 -4.5" />
                                    <path d="M12 12v9" />
                                    <path d="M12 12l-8 -4.5" />
                                    <path d="M12 12l8 4.5" />
                                    <path d="M12 3v9" />
                                    <path d="M12 12l-8 4.5" />
                                </svg>
                            )}
                        </div>
                        <p className="text-base font-medium leading-6 text-white">
                            {detail.title}
                        </p>
                    </dt>
                    <p className={`${detail.description === 'N/A' ? 'text-zinc-400' : 'text-white'} mt-4 text-sm`}
                    >{detail.description}</p>
                </div>
            ))}
        </dl>
    )
}
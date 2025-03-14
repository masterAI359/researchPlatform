



export default function SummarizedText({ summary }) {


    return (
        <div
            className={` text-white 2xl:text-xl whitespace-pre-wrap pb-7 pt-6 transition-all duration-300 ease-in-out`}
        >
            {typeof summary[0] === 'string'
                ? `${summary[0]}`
                : summary.map((obj, index) => {
                    return (
                        <div key={index}>
                            {obj.heading === '' ? (
                                ''
                            ) : (
                                <div className="w-full">
                                    <h1 className="text-2xl font-thin tracking-tight text-white pt-6 pb-5 font-serif">

                                        {obj.heading}
                                    </h1>
                                </div>
                            )}

                            <p className="font-serif leading-8 font-thin 2xl:text-lg ">
                                {obj.text}
                            </p>
                        </div>
                    );
                })}
        </div>
    )

}
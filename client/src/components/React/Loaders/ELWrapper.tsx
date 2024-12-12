import AnimatedSVG from "./AnimatedSVG"

export default function ELWrapper() {

    return (
        <section className="w-full h-full mx-auto">

            <div className="w-fit flex items-center mx-auto h-auto w-auto px-20">
                <AnimatedSVG />
            </div>
        </section>
    )
}
export default function AboutHeader() {

    return (
        <section className="p-4 lg:p-8">
            <div className="mx-auto 2xl:max-w-5xl py-24 lg:px-16 md:px-12 px-2 items-center lg:pt-24 relative w-full bg-gradientdown rounded-4xl">
                <div className="max-w-xl mx-auto px-4">
                    <div>
                        <span className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white/10">
                            About
                        </span>
                        <h1 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                            Bringing Clarity<span className="block text-zinc-400">to muddy waters</span>
                        </h1>
                        <div className="mt-6 text-white font-light space-y-4">
                            <p>
                                Elenchus is a tool I built to help people approach complex or emotionally charged topics with a more structured, thoughtful mindset.
                            </p>

                            <p>
                                The idea came from a frustration I felt — seeing online conversations spiral into unproductive arguments where people talk past each other, rather than work toward understanding.
                                I say that not just as an observer, but as someone who used to constantly engage in those arguments myself. Fueling debates that often went nowhere and helped no one.
                            </p>

                            <p>
                                Having an intellectually honest persuit of the truth is significantly easier to
                                do in a deliberate search for evidence, than the all too common comment section
                                battel royale's that seem to make up online discourse. And that, is the main idea
                                here. Not unlike the method of elenchus, this tool was built to serve as a means of
                                introspection into why we believe something.
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
};
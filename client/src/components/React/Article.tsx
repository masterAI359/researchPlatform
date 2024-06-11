export function Article({ articles }) {

    const { url, name, provider, image, description, datePublished } = articles;

    return (
        <li>
            <a
                className="grid grid-cols-1 gap-12 lg:gap-24
            md:grid-cols-2 items-center"
                href={url}
                title={name}
            >
                <div>
                    <h3
                        className="text-3xl mt-6 tracking-tight font-light 
                    lg:text-4xl text-white"
                    >{name}
                    </h3>
                    <p
                        className="text-zinc-400 text-base mt-2"
                    >{description}
                    </p>
                    <p
                        className="text-zinc-400 text-xs mt-6"
                    >{provider}
                     <span><time>{datePublished}</time></span>
                    </p>
                </div>
                <img
                    className="rounded-3xl bg-zinc-100 sm:aspect-[2/1] lg:aspect-[3/2]"
                   width="560"
                   height="380"
                   src={image.img} />
            </a>
        </li>
    );
}

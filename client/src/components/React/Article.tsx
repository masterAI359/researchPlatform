import { decoder } from "astro/dist/runtime/server/render/common";

export function Article({ article }) {


    const containsEncodedComponents = (data) => {

        return decodeURI(data) !== decodeURIComponent(data)
      }
      


    console.log(article)

    const { url, name, provider, image, description, datePublished } = article;

    const formattedDate = 'June 12, 2024'

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
                    >
                     <strong>{name}</strong>  
                    </h3>
                    <p
                        className="text-zinc-400 text-base mt-2"
                    >{description}
                    </p>
                    <p
                        className="text-white text-xs mt-6 mr-5"
                    >{provider}
                     <span className="float-right text-zinc-400"><time>   {datePublished}</time></span>
                    </p>
                </div>
                <img
                    className="rounded-2xl object-cover bg-zinc-100 sm:aspect-[2/1] lg:aspect-[3/2]"
                   src={image.img}
                   width={200}
                   height={150}
                   />
            </a>
        </li>
    );
}

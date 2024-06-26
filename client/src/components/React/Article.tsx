import elenchus from '../../public/images/logos/elenchus.svg'

 export default function Article ({ article }) {
    


    const { url, name, provider, image, description, datePublished, logo } = article;

   
    


    return (
        <li
        key={name}
        className='relative mx-auto rounded-3xl shadow-inset sm:opacity-0 lg:opacity-100 p-4 bg-white/10 lg:p-8 ring-1 ring-white/5'
    >
        <a href={url} target='_blank'>
            <figcaption className='relative flex flex-row items-center gap-4 pb-6 border-b border-white/10'>
                <div className='overflow-hidden shrink-0'>
                    <img
                        src={image.img}
                        className='object-cover rounded-full h-20 w-20 shrink-0'
                    />
                </div>
                <div>
                    <div className='text-lg font-medium leading-6 text-white'>
                        {name}
                    </div>
                    <div className='mt-1'>
                    {/*()    <span className='text-sm mt-5 flex items-center text-white group-hover:text-white'>
                          <img 
                          className="mr-3 h-12 w-12"
                          src = {getSVG(provider)}
                          alt = {''}
                          /> 
                          {provider}
                        </span> */}
                    </div>
                </div>
            </figcaption>
            <figure>
                <div className='h-full group mt-2 pt-2'>
                    <blockquote className='relative'>
                    <span className='text-sm mb-5 flex items-center text-white group-hover:text-white'>
                          <img 
                          className="mr-3 h-12 w-12"
                          src = {logo}
                          alt = {''}
                          /> 
                          {provider}
                        </span>
                       <p className='text-base text-white'>
                            "{description}"
                        </p>
                    </blockquote>
                </div>
            </figure>
        </a>
    </li>
    );
}





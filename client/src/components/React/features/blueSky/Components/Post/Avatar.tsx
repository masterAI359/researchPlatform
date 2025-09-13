interface AvatarProps {
    src: string | null
};

type FetchPriority = 'high' | 'low' | 'auto';

type LoadingTypes = 'eager' | 'lazy'

type ImgProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    fetchpriority?: FetchPriority;
    loading?: LoadingTypes;
    isPriority?: boolean // lowercase HTML attr
};

export default function Avatar({ src }: AvatarProps): React.ReactNode {

    const imgProps: ImgProps = {
        src: src,
        alt: 'avatar',
        loading: 'lazy',
        decoding: 'async',
        fetchpriority: 'auto',
        className: 'object-cover bg-zinc-100 rounded-full h-full w-full shrink-0',
        onError: (e) => {
            const img = e.currentTarget;
            img.onerror = null;
            img.src = '/images/icons/icons8-profile.svg';
        },
    };



    return (
        <div className='overflow-hidden shrink-0 h-12 w-12'>
            <img
                {...imgProps}
            />
        </div>
    )
}

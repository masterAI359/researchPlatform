

export default function LinkThumbnail({ isPriority, thumbnail }) {

    return (
        <div
            className='absolute inset-0 w-full h-full bg-cover bg-center opacity-40 rounded-t-xl md:rounded-t-3xl'
        >
            <img
                src={thumbnail}
                loading={isPriority ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={isPriority ? "high" : "auto"}
                onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = "/images/logos/fallback.jpg";
                }}
                alt="thumbnail"
                className="absolute inset-0 h-full w-full object-cover"
            />
        </div>
    );
};
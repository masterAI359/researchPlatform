

export default function LinkThumbnail({ imgProps }) {

    return (
        <div
            className='absolute inset-0 w-full h-full bg-cover 
            bg-center opacity-40 rounded-t-xl md:rounded-t-3xl'
        >
            <img
                {...imgProps}
            />
        </div>
    );
};


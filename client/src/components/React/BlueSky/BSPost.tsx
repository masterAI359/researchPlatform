import { limitName } from "@/helpers/Presentation";

export function BSPost({ post, setClicked }) {

  const handle = limitName(post.author.handle);

  return (
    <div
      onClick={() => setClicked(prev => !prev)}
      key={post.record.text}
      className='relative rounded-3xl shadow-inset lg:opacity-90 my-8 lg:hover:opacity-100 p-4 bg-white/5 lg:p-8 ring-1 ring-white/5'
    >
      <a href='#'>
        <figcaption className='relative flex flex-row items-center gap-2 pb-6 border-b border-white/10'>
          <div className='overflow-hidden shrink-0'>
            <img
              src={post.author.avatar ? post.author.avatar : null}
              className='object-cover rounded-full h-12 w-12 shrink-0' />
          </div>
          <div className="flex flex-col items-center h-full">
            <div className="text-base font-light leading-6 text-white w-full h-auto">
              {post.author.displayName}
            </div>
            <div className='text-xs font-light leading-6 text-white w-full h-auto'>
              <em>
                @{handle}
              </em>
            </div>

          </div>
        </figcaption>
        <figure>
          <div className='h-full max-w-full overflow-x-hidden group mt-2 pt-2'>
            <blockquote className='relative'>
              <p className='text-sm text-white text-wrap'>
                {post.record.text}
              </p>
            </blockquote>
          </div>
        </figure>
      </a>
    </div>
  );
}

import { limitName } from "@/helpers/Presentation";
import { useDispatch, useSelector  } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { selectPost } from "@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice";

export function BSPost({ post, setClicked }) {
  const selected = useSelector((state: RootState) => state.bluesky.selected)
  const dispatch = useDispatch();
  const handle = limitName(post.author.handle);

  const choosePost = () => {
    setClicked(prev => !prev);
    if(selected === post) {
      dispatch(selectPost(null))
    } else {
      dispatch(selectPost(post))
    }
  }

  return (
    <div
      onClick={choosePost}
      key={post.record.text}
      className={`relative rounded-3xl shadow-inset  my-8 lg:hover:opacity-100 py-2  lg:p-6 ring-1 ring-white/5 cursor-pointer flex flex-col gap-y-2
        ${post === selected ? 'bg-white shadow-material border border-2 border-black/20 scale-105' : 'lg:opacity-90 bg-white/5'}
        `}
    >
        <figcaption className={`relative flex flex-row items-center gap-2 pb-6 border-b ${post === selected ? 'border-black/10' : 'border-white/10'}`}>
          <div className='overflow-hidden shrink-0'>
            <img
              src={post.author.avatar ? post.author.avatar : null}
              className='object-cover rounded-full h-12 w-12 shrink-0' />
          </div>
          <div className="flex flex-col items-center h-full">
            <div className={`text-base font-light leading-6 w-full h-auto ${post === selected ? 'text-black' : 'text-white'}`}>
              {post.author.displayName}
            </div>
            <div className={`text-xs font-light leading-6 w-full h-auto ${post === selected ? 'text-black' : 'text-white'}`}>
              <em>
                @{handle}
              </em>
            </div>

          </div>
        </figcaption>
        <figure>
          <div className='h-full max-w-full overflow-x-hidden group mt-2 pt-2'>
            <blockquote className='relative'>
              <p className={`text-sm text-wrap ${post === selected ? 'text-black' : 'text-white'}`}>
                {post.record.text}
              </p>
            </blockquote>
          </div>
        </figure>
        <footer className="w-full mx-auto flex items-center relative bottom-0 pt-2">
          
        <svg className={`icon icon-tabler icons-tabler-outline icon-tabler-heart ${post === selected ? 'text-zinc-500' : 'text-zinc-300'}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
          <p className={`text-sm ${post === selected ? 'text-black/70' : 'text-zinc-300'}`}>{post.likeCount} </p>
        </footer>
    </div>
  );
}

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/ReduxToolKit/store";
import { getPopoverPost, selectPost } from "@/ReduxToolKit/Reducers/BlueSky/BlueSkySlice";
import Avatar from './Post/Avatar';
import Author from "./Post/Author";
import PostContent from "./Post/PostContent";

interface BSPostProps {
  post: any,
}

export function BSPost({ post }: BSPostProps) {
  const selected = useSelector((state: RootState) => state.bluesky.selected)
  const dispatch = useDispatch<AppDispatch>();
  const text: string = post.record?.text ?? null;

  const choosePost = () => {
    if (selected) return;
    dispatch(getPopoverPost(post));
    dispatch(selectPost(text))
  }

  return (
    <div
      onClick={choosePost}
      className={`relative rounded-3xl shadow-inset  my-8 lg:hover:opacity-100 py-2 px-2  lg:p-6 ring-1 ring-white/5 cursor-pointer flex flex-col gap-y-2
        ${text === selected ? 'bg-white shadow-material border-2 border-black/20 lg:scale-105 z-40 pointer-events-none' : 'pointer-events-auto lg:opacity-90 bg-white/5'}
        `}
    >
      <figcaption className={`relative flex flex-row items-center gap-2 pb-6 border-b 
        ${text === selected
          ? 'border-black/10'
          : 'border-white/10'}`
      }
      >
        <Avatar
          src={post.author?.avatar}
        />
        <Author
          post={post}
        />
      </figcaption>
      <figure>
        <PostContent
          text={text}
        />
      </figure>
      <footer className="w-full mx-auto flex items-center relative bottom-0 pt-2">

        <svg className={`icon icon-tabler icons-tabler-outline icon-tabler-heart ${post.record.text === selected ? 'text-zinc-500' : 'text-zinc-300'}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" /></svg>
        <p className={`text-sm ${post.record.text === selected ? 'text-black/70' : 'text-zinc-300'}`}>{post.likeCount} </p>
      </footer>
    </div>
  );
};



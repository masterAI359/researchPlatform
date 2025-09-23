import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import SelectedPost from "./SelectedPost";
import UseThisPost from "./UseThisPost";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";

interface PopoverProps {
  shouldRedirect: boolean
};

export default function Popover({ shouldRedirect }: PopoverProps) {
  const popoverPost = useSelector((state: RootState) => state.bluesky.popoverPost);

  const popover = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.3, duration: 0.2, type: 'tween' } }}
      exit={{ opacity: 0, transition: { delay: 0, duration: 0.2, type: 'tween' } }}
      className={`z-[900] fixed inset-0 flex justify-center items-center bg-black/40
        ${popoverPost
          ? 'overflow-y-hidden'
          : ''}
        `}
    >
      <div className="relative bg-black border border-border_gray
       h-fit w-88 sm:w-auto p-4 sm:p-8 rounded-3xl shadow-material z-[910]
      flex flex-col justify-center  items-center
      ">
        <header className="w-full h-auto">
          <h1 className="text-white font-light tracking-tight text-lg lg:text-xl xl:text-2xl text-center">
            Investigate this?
          </h1>
        </header>
        <SelectedPost
        />
        <UseThisPost
          post={popoverPost}
          shouldRedirect={shouldRedirect}
        />

      </div>
    </motion.div>
  );

  return createPortal(popover, document.body);
};

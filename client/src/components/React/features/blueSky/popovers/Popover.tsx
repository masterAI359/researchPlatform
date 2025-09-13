import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import SelectedPost from "./SelectedPost";
import UseThisPost from "./UseThisPost";
import { useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";

const variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 }
};

interface PopoverProps {
  shouldRedirect: boolean
};

export default function Popover({ shouldRedirect }: PopoverProps) {
  const popoverPost = useSelector((state: RootState) => state.bluesky.popoverPost);

  const popover = (
    <motion.div
      variants={variants}
      initial="closed"
      animate="open"
      exit="closed"
      className={`z-[900] fixed inset-0 flex justify-center items-center
        ${popoverPost ? 'overflow-y-hidden' : ''}
        `}
    >
      <div className="relative bg-black border border-border_gray
       h-fit w-auto p-8 rounded-3xl shadow-material z-[910]
      flex flex-col justify-center  items-center
      ">
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

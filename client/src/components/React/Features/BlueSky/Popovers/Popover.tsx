import { motion } from "framer-motion";

const variants = {
  closed: { opacity: 0 },
  open: { opacity: 1 }
};

export default function Popover({ children }) {
  return (
    <motion.div
      variants={variants}
      initial="closed"
      animate="open"
      exit="closed"
      // ← positions the popover *just* to the right of its parent
      className="absolute bottom-52 xl:bottom-3/4 left-16 xl:left-1/2 ml-2 z-50"
    >
      {/* make this container relative so the arrow can position itself */}
      <div className="relative bg-white 2xl:h-52 p-2 rounded-3xl shadow-material">
        {/* arrow: zero‐size div with CSS borders; bottom‐left, offset by left-4 */}
        {children}
        <div
          className="
            absolute
            bottom-0.5 left-8
            transform translate-y-full
            w-0 h-0
            border-l-8 border-l-transparent
            border-r-8 border-r-transparent
            border-t-8 border-t-white
          "
        />

      </div>
    </motion.div>
  );
}

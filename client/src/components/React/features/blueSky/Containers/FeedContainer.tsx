import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { RootState } from "@/ReduxToolKit/store";
import BlueSkyLoader from "../Loaders/BlueSkyLoader";
import { variants } from "@/motion/variants";
import { PostsProps } from "@/env";
import Popover from "../Popovers/Popover";
import Feed from "../Components/feed/Feed";

export default function FeedContainer({ posts, shouldRedirect }: PostsProps) {
    const status = useSelector((state: RootState) => state.bluesky.status);
    const selected = useSelector((state: RootState) => state.bluesky.selected);

    return (
        <motion.div
            key='postfeed'
            variants={variants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: 'tween', duration: 0.3 }}
            className="h-full"
        >
            <div className="relative min-h-screen w-full">

                <AnimatePresence>
                    {selected &&
                        <Popover
                            key='popoverPost'
                            shouldRedirect={shouldRedirect}
                        />}
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    {status === 'pending' &&
                        <BlueSkyLoader key={'pendingPosts'}
                        />
                    }

                    {status !== 'pending' &&
                        <Feed
                            key='feed'
                            posts={posts}
                        />
                    }

                </AnimatePresence>

                <AnimatePresence>

                </AnimatePresence>
            </div>


        </motion.div>
    )
};



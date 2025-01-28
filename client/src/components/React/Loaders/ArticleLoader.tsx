import { motion } from "framer-motion"


export default function ArticleLoader() {

  const container = {

    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: 'easeInOut',
        delayChildren: 0.3,
        staggerDirection: -1
      }
    }
  }

  const loaders = Array.from({ length: 10 }, (_, index) => (
    <div key={index} className="relative p-4 w-full min-w-full bg-loader_black overflow-hidden shadow hover:shadow-md rounded-3xl">
      <div className="animate-pulse flex flex-col">
        <div className="rounded w-full h-52 bg-inner_loader_black" />
        <div className="flex items-center mt-5">
          <div>
            <div className="rounded-full bg-inner_loader_black w-10 h-10" />
          </div>
          <div className="flex justify-between w-full ml-3">
            <div className="w-5/12 h-3  bg-inner_loader_black rounded" />
          </div>
        </div>

        <div className="flex flex-col mt-5">
          <div className="w-full h-5  bg-inner_loader_black rounded" />
          <div className="mt-2 w-10/12 h-3  bg-inner_loader_black rounded" />
          <div className="mt-2 w-8/12 h-3  bg-inner_loader_black rounded" />
        </div>
        <div className="grid grid-cols-2 mt-5 gap-x-2 gap-y-1">
          <div className="mt-2 w-full h-3  bg-inner_loader_black rounded" />
          <div className="mt-2 w-full h-3  bg-inner_loader_black rounded" />
          <div className="mt-2 w-full h-3  bg-inner_loader_black rounded" />
          <div className="mt-2 w-full h-3  bg-inner_loader_black rounded" />
        </div>

      </div>
    </div>
  ))

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <div
        className="grid grid-cols-2 h-auto lg:gap-16 xs:gap-1 mx-auto pointer-events-none 
      px-8 py-24 md:px-12 xs:px-2 lg:px-16 xl:px-36 2xl:max-w-7xl w-full">

        {loaders}

      </div>
    </motion.div>


  )
}
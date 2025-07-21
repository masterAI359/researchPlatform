import { motion } from "framer-motion"


export default function LinkLoader() {

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
    <div key={`loader${index}`} className="p-3 md:p-4 xl:min-h-72 xl:max-h-72 xl:min-w-80 xl:max-w-80 lg:min-w-72 lg:max-w-72 lg:min-h-72 lg:max-h-72 h-44 w-44 relative
     md:rounded-3xl bg-rich_black overflow-hidden shadow hover:shadow-md rounded-3xl">
      <div className="animate-pulse flex flex-col">
        <div className="rounded h-12 md:h-36  bg-inner_loader_black" />
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
      layout
      key='articleLoader'
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <div
        className="relative max-w-4xl 2xl:max-w-6xl 2xl:w-full mx-auto justify-items-center
                    grid grid-cols-2 2xl:grid-cols-3 2xl:gap-y-10 2xl:gap-x-0 xs:gap-3 min-h-full py-24">

        {loaders}

      </div>
    </motion.div>


  )
}
import { motion } from "framer-motion";
import MenuItem from "./MenuItems";


const variants = {
    open: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    },
    closed: {
        opacity: 0,
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const items = [
    { id: 0, text: 'Home', link: '/' },
    { id: 1, text: 'Investigate', link: '/Investigate' },
    { id: 2, text: 'Current Events', link: '#' },
    { id: 3, text: 'About', link: '/about' },
    { id: 4, text: 'My Account', link: '#' },

]

export default function MobileNavigation({ isOpen }) {

    console.log(items)

    return (<motion.ul
        className="z-50 w-2/3 flex flex-col gap-y-8 items-center absolute left-16 top-24"
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
    >
        {items.map((item) => (
            <MenuItem isOpen={isOpen} id={item.id} key={item.id} text={item.text} link={item.link} />
        ))}
    </motion.ul>)

}
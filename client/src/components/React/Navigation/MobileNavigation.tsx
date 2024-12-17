import { motion } from "framer-motion";
import MenuItem from "./MenuItems";
import { Link } from "react-router-dom";

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
    { id: 3, text: 'About', link: '#' },
    { id: 4, text: 'My Account', link: '#' },

]

export default function MobileNavigation({ isOpen }) {

    console.log(items)

    return (<motion.ul
        className="z-50 w-2/3 flex flex-col gap-y-8 items-center absolute left-16 top-24"
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
    >
        <motion.li
            key='Home'
            variants={variants}
            animate={isOpen ? 'open' : 'closed'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-auto mx-auto z-50"
        >
            <div className="w-auto h-auto mx-auto">
                <p className="text-sm font-light tracking-tight">
                    <Link to='/Investigate' />
                </p>
            </div>

        </motion.li>

        {items.map((item) => (
            <MenuItem id={item.id} text={item.text} link={item.link} isOpen={isOpen} />
        ))}

    </motion.ul>)

}

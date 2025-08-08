import { motion } from "framer-motion";
import MenuItem, { DashboardLink } from "./MenuItems";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/ReduxToolKit/store";
import { showSignOut } from "@/ReduxToolKit/Reducers/Athentication/Authentication";
import { useNavigate } from "react-router-dom";


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


export default function MobileNavigation({ isOpen, toggle }) {
    const activeSession = useSelector((state: RootState) => state.auth.user_id);
    const dispatch = useDispatch()
    const navigate = useNavigate()



    const handleAuthChoice = () => {
        if (!activeSession) {
            navigate('/Login')
            toggle()

        } else if (activeSession) {
            dispatch(showSignOut())
            toggle()
        }
    }


    const items = [
        { id: 0, text: 'Home', link: '/', icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtklEQVR4nO2UDQrCMAyFewotXnE77nB6mk8KVaNu1v6kG5gHhUJJ3pdHiXOmCgGHcLYy98A5Ht/b/AhMPHUFTj0nn6Px/Hb3PSe/hKnjP5jUk2DBXLzpQvDFXB2CH8zVIMgwbw5BgXkzCCrMqyFoYF4MweuSocViiT1JLis+1yu15qK31HISwCgoVwFIKFFz7z2ukQ4yMgWA0HtIBOYeBTlvJTUGYAlYAvtPIGfhlNTsF8D0V7oBFlC/UjQlsXIAAAAASUVORK5CYII=" },
        { id: 1, text: 'Investigate', link: '/Investigate', icon: "data:image/png;base64,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" },
        { id: 3, text: 'About', link: '/About', icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADSklEQVR4nO2aS0tVURTHL9qg0jLIRmmNapLYvD5EdI0wwpz2GIuW2kClfIGfQKJCzPoIYepAs+dQaZhoCRnZa1i/WLkPLHdX79mP+4DuHw4c7j3rv9a6e5/12jeTqaCCCooG4AhwARgAngCzwGtzyf1j810LUJ8pJwCHgBvAIvCb9JBnnwPXgbpSO3AH+Eo4Ns1K1RXbicvA+g5GrQATQDfQBmTN1WY+mzDP5MJH4FIxHKgFHuYw4BMwCJxy4GoChoCNHHz3gZpCvsivLIXfgI4QpebH6QS+W9wvRWchnFi2FD0FjkbU0QBMWzqWojljfjF7Je4CVVEUbNdVDQxbul4A+2OQ2+9ERxSrd9fZZem8FyM6bVuJaNbm1z1q6W4NyRPr1jtR5bFVzpmr2kP2mdL/wSvPmGSno5Pzi21KkgSPPOQbgR+KY8BnNTZD3gtgH/BLccj9Xg+eW4pj02lVTO2kk51XngDeKZ7lgKi5oXiuuQhLAZhg0McAw3PSRL0HwIkAnmFlz4JL8tNVbOqyo1AAmq0tmr8FMP1EgveZMgGwquxqSSMg5XSCiQgGHJQrAs+ksqs/jYB0dgm6A5WfBX6aEHomkKtX2TWVRmBOCbQFKh9RXCOBXO2KazaNwFslcD5Q+ZjiGgvkyiquN/+VI3MRt1ZMR9pdt5auj3rKyJHbTnWbhLZY4TeyI5OKq881Ia6UkSOriiubRqDeqlqbSu0IcFrxiG2H0wrKBDDBUBk4MqJ45n3LeCmha0vlCFtlvLQSCa66CNdZjVVnCR3pURxfnNtdq3iU4VlDsR0Bjlmtbv5otcOqyCw2wbTHAEEnsSuOsnus5LzmXUXLQJntGPbgaEnVP+y+moKLrhw2oQyUNbqCCN0HDoLxGKQ1ZqCsMeq6zRy205ilazHKyFT18TJQ1pDhWWMUBVs6jpvjOY2l6Ed0JuPLQFlDIspN3zxjeA+YECudpL0ShTlnlCWWgTL/YsOMbJodyw7J2J9z8I1H2055jGg1s9hcWDWVaq8Jv3+jlrnvNd9JKM2FteDo5Jln+q0KwBeSsftiTFtCHZIj5gWras4HeXZeRqAlPZ7eJSBkzUpNATPqDwMz5rN+80y6UryCCirIxMAfDx+rHvdfmDcAAAAASUVORK5CYII=" },

    ];


    return (<motion.ul
        className={`z-50 w-2/3 flex flex-col gap-y-8 items-center absolute left-16 top-24
            ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
    >
        {items.map((item) => (
            <MenuItem id={item.id} key={item.id} text={item.text} link={item.link} isOpen={isOpen} toggle={toggle} icon={item.icon} />
        ))}
        {!activeSession && <motion.li
            key={'signout'}
            variants={variants}
            animate={isOpen ? 'open' : 'closed'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-auto mx-auto z-50"
            onClick={handleAuthChoice}
        >
            <div className="w-52 text-center bg-ebony/30 shadow-inset rounded-xl h-auto mx-auto p-4 flex items-center justify-start gap-x-4">
                <div className="w-auto h-auto">
                    {activeSession ? <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline text-white/80 icon-tabler-logout-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" /><path d="M15 12h-12l3 -3" /><path d="M6 15l-3 -3" /></svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler text-white/80 icons-tabler-outline icon-tabler-login-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" /><path d="M3 12h13l-3 -3" /><path d="M13 15l3 -3" /></svg>

                    }
                </div>
                <p className="text-sm text-white font-light tracking-tight text-nowrap">
                    Log in
                </p>
            </div>
        </motion.li>}

        <DashboardLink activeSession={activeSession} isOpen={isOpen} toggle={toggle} />

        {activeSession && <motion.li
            key={'signout'}
            variants={variants}
            animate={isOpen ? 'open' : 'closed'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-auto mx-auto z-50"
            onClick={handleAuthChoice}
        >
            <div className="w-52 text-center bg-ebony/30 shadow-inset rounded-xl h-auto mx-auto p-4 flex items-center justify-start gap-x-4">
                <div className="w-auto h-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler text-white/80 icons-tabler-outline icon-tabler-login-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" /><path d="M3 12h13l-3 -3" /><path d="M13 15l3 -3" /></svg>
                </div>
                <p className="text-base text-white font-light tracking-tight text-nowrap">
                    Sign out
                </p>
            </div>
        </motion.li>}

    </motion.ul>)

}

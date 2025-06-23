import { useEffect, useState } from "react"
import { emailValidation } from "@/helpers/validation"
import { AnimatePresence } from "framer-motion"
import Emailing from "../AuthNotifications/Emailing"
import { Link } from "react-router-dom"
import { sendEmailResetLink } from "@/helpers/FetchRequests"

export default function GetLink({ }) {
    const [emailToReset, setEmailToReset] = useState<string>(null)
    const [validEmail, setValidEmail] = useState<boolean>(null)
    const [emailSent, setEmailSent] = useState<boolean>(null)
    const [pending, setPending] = useState<boolean>(null)

    const emailInput = (e: any) => {
        setEmailToReset(e.target.value)
    }

    const handleResetLink = async (e: any, email: string) => {
        e.preventDefault()
        setPending(true)
        if (validEmail) {
            window.localStorage.setItem('email_for_pw_reset', JSON.stringify({ email: emailToReset }));
            sendEmailResetLink(email, setEmailSent);
        };
    };

    useEffect(() => {

        if (emailToReset !== null) emailValidation(emailToReset, setValidEmail);
    }, [emailToReset, validEmail]);



    return (
        <div className="w-full max-w-md md:max-w-sm mx-auto">
            <AnimatePresence>
                {pending && <Emailing setPending={setPending} emailSent={emailSent} />}
            </AnimatePresence>
            <div className="flex flex-col">
                <div className="border-b pb-12">
                    <p className="text-3xl tracking-tight font-light lg:text-4xl text-white">
                        Reset password
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">
                        Submit your email and you will get a reset link
                    </p>
                </div>
            </div>
            <form className="mt-12">
                <div className="space-y-6">
                    <div className="col-span-full">
                        <label htmlFor="email" className="block mb-3 text-sm font-medium text-white">
                            Email
                        </label>
                        <input onChange={(e) => emailInput(e)} id="email" name="email" type="email" autoComplete="email" placeholder="email@example.com"
                            className="block w-full px-3 py-3 border-2 border-zinc-100 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 focus:border-white/10 focus:bg-transparent focus:outline-none focus:ring-black sm:text-sm placeholder-zinc-500 h-10" required />
                    </div>
                    <div className="col-span-full">
                        <button onClick={(e) => handleResetLink(e, emailToReset)} type="button" className="text-sm py-2 px-4 border focus:ring-2 h-10 rounded-full border-zinc-100 bg-white hover:bg-black/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white w-full inline-flex items-center justify-center ring-1 ring-transparent">
                            Submit
                        </button>
                    </div>
                    <div>
                        <Link to={'/login'} >
                            <p className="font-medium text-sm leading-tight text-white mx-auto">
                                Already have a password? <a className="text-white underline hover:text-blue-400 ml-3" href="#">Log in instead</a>
                            </p>
                        </Link>
                    </div>
                </div>
            </form>
            {emailSent && <Instructions />}
        </div>
    )
}

function Instructions() {

    return (
        <div className="bg-white/5 w-full my-8 p-6 h-auto rounded-lg">
            <header className="w-full mx-auto">
                <h1 className="text-white text-wrap font-light tracking-tight text-lg">
                    Check your email for a reset link, which will route you back to change your password!
                </h1>
            </header>
        </div>
    )
}
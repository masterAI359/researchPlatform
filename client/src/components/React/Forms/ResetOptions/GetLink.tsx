import { supabase } from "@/SupaBase/supaBaseClient"
import { useEffect, useState } from "react"
import { emailValidation } from "@/helpers/validation"
import { useLocation } from "react-router-dom";

export default function GetLink({ }) {
    const [emailToReset, setEmailToReset] = useState<string>(null)
    const [validEmail, setValidEmail] = useState<boolean>(null)
    const location = useLocation()

    const redirectRoute = location.pathname

    const emailInput = (e: any) => {

        setEmailToReset(e.target.value)
    }

    const handleResetLink = async (e: any, mail: string) => {

        console.log("Sending Link your your email")

        e.preventDefault()
        if (validEmail) {
            await supabase.auth.resetPasswordForEmail(emailToReset, {
                redirectTo: 'http://localhost:5173/UpdatePassword',
            })
        }


    }


    useEffect(() => {

        if (emailToReset !== null) {

            emailValidation(emailToReset, setValidEmail)
        }

        console.log(emailToReset, validEmail)
    }, [emailToReset, validEmail])



    return (
        <div className="w-full max-w-md md:max-w-sm mx-auto">
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
                        <input onChange={(e) => emailInput(e)} id="email" name="email" type="email" autoComplete="email" placeholder="email@example.com" className="block w-full px-3 py-3 border-2 border-zinc-100 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 focus:border-black focus:bg-transparent focus:outline-none focus:ring-black sm:text-sm placeholder-zinc-500 h-10" required />
                    </div>
                    <div className="col-span-full">
                        <button onClick={(e) => handleResetLink(e, emailToReset)} type="submit" className="text-sm py-2 px-4 border focus:ring-2 h-10 rounded-full border-zinc-100 bg-white hover:bg-black/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white w-full inline-flex items-center justify-center ring-1 ring-transparent">
                            Submit
                        </button>
                    </div>
                    <div>
                        <p className="font-medium text-sm leading-tight text-white mx-auto">
                            Already have a password? <a className="text-white underline hover:text-blue-400 ml-3" href="/login">Log in instead</a>
                        </p>
                    </div>
                </div>
            </form>
        </div>
    )
}
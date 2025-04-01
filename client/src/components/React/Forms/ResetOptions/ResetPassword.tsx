import { supabase } from "@/SupaBase/supaBaseClient"
import { useEffect, useState } from "react"
import { confirmPassword } from "@/helpers/validation"
import { useNavigate } from "react-router-dom"

export default function ResetPassword({ }) {
    const [newPassword, setNewPassword] = useState<string>(null)
    const [validEntries, setValidEntries] = useState<boolean>(null)
    const [entryOne, setEntryOne] = useState<string>(null)
    const [entryTwo, setEntryTwo] = useState<string>(null)
    const [successfullyChanged, setSuccessFullyChanged] = useState<boolean>(null)
    const navigate = useNavigate()

    const redirectUser = () => {
        console.log('invoked')
        navigate('/Login')
    }

    const resetPassword = async (e: any) => {

        e.preventDefault()

        if (validEntries) {
            setNewPassword(entryOne)
            const { data, error } = await supabase.auth.updateUser({
                password: newPassword
            })

            if (error) {
                console.log(error)
                setSuccessFullyChanged(false)
            } else {
                setSuccessFullyChanged(true)
                console.log({ "Successful Password Change: ": data })
                redirectUser()

            }

        } else {
            console.log("Passwords must match")
        }

    }

    useEffect(() => {

        if (entryOne && entryTwo) {
            confirmPassword(entryOne, entryTwo, setValidEntries)
        }

        console.log(validEntries)

    }, [entryOne, entryTwo])



    return (
        <div className="w-full max-w-md md:max-w-sm mx-auto">
            <div className="flex flex-col">
                <div className="border-b pb-12">
                    <p className="text-3xl tracking-tight font-light lg:text-4xl text-white">
                        Reset password
                    </p>
                    <p className="mt-2 text-sm text-zinc-400">
                        Enter your new password below
                    </p>
                </div>
            </div>
            <form className="mt-12">
                <div className="space-y-6">
                    <div className="col-span-full">
                        <label htmlFor="email" className="block mb-3 text-sm font-medium text-white">
                            New Password
                        </label>
                        <input onChange={(e) => setEntryOne(e.target.value)} id="newPassword" name="newPassword" type="password" placeholder="new password..."
                            className={`block w-full px-3 py-3 border-2 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 
                                focus:border-black focus:bg-transparent focus:outline-none ${validEntries ? 'focus:ring-green-500 border-green-500' : 'focus:ring-black border-zinc-100'
                                } sm:text-sm placeholder-zinc-500 h-10`}
                            required />
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="email" className="block mb-3 text-sm font-medium text-white">
                            Confirm New Password
                        </label>
                        <input onChange={(e) => setEntryTwo(e.target.value)} id="confirmNewPassword" name="confirmNewPassword" type="password" placeholder="confirm new password..."
                            className={`block w-full px-3 py-3 border-2 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 
                                focus:border-white focus:bg-transparent focus:outline-none ${validEntries ? 'border-green-500 focus:ring-green-500' : 'focus:ring-black border-zinc-100'
                                } sm:text-sm placeholder-zinc-500 h-10`}
                            required />
                    </div>
                    <div className="col-span-full">
                        <button onClick={(e) => resetPassword(e)} type="submit" className="text-sm py-2 px-4 border focus:ring-2 h-10 rounded-full border-zinc-100 
                        bg-white hover:bg-black/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white w-full inline-flex items-center 
                        justify-center ring-1 ring-transparent">
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



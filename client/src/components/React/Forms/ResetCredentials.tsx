import { useEffect, useState } from "react";
import { supabase } from "@/SupaBase/supaBaseClient";
import ResetPassword from "./ResetOptions/ResetPassword";
import GetLink from "./ResetOptions/GetLink";

export default function ResetCredentials() {
    const [emailToReset, setEmailToReset] = useState<string>(null)
    const [allowUpdate, setAllowUpdate] = useState<boolean>(false)
    const [passwordInsert, setPasswordInsert] = useState<string>(null)
    const [entryOne, setEntryOne] = useState<string>(null)
    const [entryTwo, setEntryTwo] = useState<string>(null)


    const getResetLink = async () => {

        const { data, error } = await supabase.auth
            .resetPasswordForEmail('user@email.com')
    }

    const resetPassword = async () => {

        const { data, error } = await supabase.auth.updateUser({
            password: passwordInsert
        })

    }


    useEffect(() => {

        supabase.auth.onAuthStateChange(async (event, session) => {
            if (event == "PASSWORD_RECOVERY") {
                const newPassword = prompt("What would you like your new password to be?");
                const { data, error } = await supabase.auth
                    .updateUser({ password: newPassword })

                if (data) alert("Password updated successfully!")
                if (error) alert("There was an error updating your password.")
            }
        })

    }, [])




    return (
        <section className="lg:p-8 overflow-hidden bg-black">
            <div className="mx-auto 2xl:max-w-7xl py-24 lg:px-16 md:px-12 px-8 xl:px-36">
                {allowUpdate ? <ResetCredentials /> : <GetLink />}
            </div>
        </section>

    )
}
import { useEffect, useState } from "react";
import { supabase } from "@/SupaBase/supaBaseClient";
import ResetPassword from "./ResetOptions/ResetPassword";
import GetLink from "./ResetOptions/GetLink";
import { useLocation } from "react-router-dom";

export default function ResetCredentials() {
    const [passwordInsert, setPasswordInsert] = useState<string>(null)
    const [allowUpdate, setAllowUpdate] = useState<boolean>(false)



    // useEffect(() => {
    //
    //     supabase.auth.onAuthStateChange(async (event, session) => {
    //         if (event == "PASSWORD_RECOVERY") {
    //             const { data, error } = await supabase.auth
    //                 .updateUser({ password: passwordInsert })
    //
    //             console.log(data)
    //
    //             if (data) alert("Password updated successfully!")
    //             if (error) alert("There was an error updating your password.")
    //         }
    //     })
    //
    //
    //
    // }, [allowUpdate,])




    return (
        <section className="lg:p-8 overflow-hidden bg-black">
            <div className="mx-auto 2xl:max-w-7xl py-24 lg:px-16 md:px-12 px-8 xl:px-36">
                {allowUpdate ? <ResetPassword setPasswordInsert={setPasswordInsert} /> : <GetLink setAllowUpdate={setAllowUpdate} />}
            </div>
        </section>

    )
}
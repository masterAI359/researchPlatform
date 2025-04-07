import ResetPassword from "./ResetOptions/ResetPassword"
import { supabase } from "@/SupaBase/supaBaseClient"
import { useEffect } from "react"


export default function UpdatePassword() {

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
          const params = new URLSearchParams(hash.substring(1));
          const access_token = params.get('access_token');
          const refresh_token = params.get('refresh_token');
          if (access_token && refresh_token) {
             supabase.auth.setSession({ access_token, refresh_token });
          }
        }

    }, [])


    return (
        <section className="lg:p-8 overflow-hidden bg-black">
            <div className="mx-auto 2xl:max-w-7xl py-24 lg:px-16 md:px-12 px-8 xl:px-36">
                <ResetPassword />
            </div>
        </section>
    )
}


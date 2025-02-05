

export default function ResetPassword() {



    return (
        <div className="mx-auto flex flex-col items-center justify-center">
            <div className="col-span-full">
                <div>
                    <label htmlFor="password" className="block mb-3 text-sm font-medium text-white">
                        New Password
                    </label>
                    <input id="password" name="password" type="password" placeholder="Type password here..." autoComplete="current-password" className="block w-full px-3 py-3 border-2 border-zinc-100 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 focus:border-black focus:bg-transparent focus:outline-none focus:ring-black sm:text-sm placeholder-zinc-500 h-10" required />
                </div>

            </div>
            <div className="col-span-full">
                <div>
                    <label htmlFor="confirm_password" className="block mb-3 text-sm font-medium text-white">
                        Confirm New Password
                    </label>
                    <input id="confirm_password" name="password" type="password" placeholder="Retype password here..." autoComplete="current-password" className="block w-full px-3 py-3 border-2 border-zinc-100 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 focus:border-black focus:bg-transparent focus:outline-none focus:ring-black sm:text-sm placeholder-zinc-500 h-10" required />
                </div>

            </div>
        </div>
    )
}
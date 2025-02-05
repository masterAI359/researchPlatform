


export default function GetLink() {

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
                        <input id="email" name="email" type="email" autoComplete="email" placeholder="email@example.com" className="block w-full px-3 py-3 border-2 border-zinc-100 rounded-xl appearance-none text-white placeholder-black/50 bg-white/5 focus:border-black focus:bg-transparent focus:outline-none focus:ring-black sm:text-sm placeholder-zinc-500 h-10" required />
                    </div>
                    <div className="col-span-full">
                        <button type="submit" className="text-sm py-2 px-4 border focus:ring-2 h-10 rounded-full border-zinc-100 bg-white hover:bg-black/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white w-full inline-flex items-center justify-center ring-1 ring-transparent">
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
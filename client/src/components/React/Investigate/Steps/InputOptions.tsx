import { useDispatch } from "react-redux";
import { displayBlueSkySearch } from "@/ReduxToolKit/Reducers/Investigate/DisplayReducer";


export default function InputOptions () {
    const dispatch = useDispatch();

       const actions = [
                {
                  title: "Look into public discourse",
                  description: "browse BlueSky for ideas to challenge",
              
                  isPermanent: true,
                },
                {
                  title: "Got an idea in mind?",
                  description: "break down an idea you heard or thought",
              
                  isPermanent: false,
                },
              ];

        

        const importFromBlueSky = actions[0];
        const writeOwnInput = actions[1];

    return (
        <section className="lg:p-8">
        <div className="mx-auto 2xl:max-w-7xl py-6 lg:px-16 md:px-12 px-8 xl:px-36 items-center lg:py-24 relative w-full">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 pb-6 gap-12 border-b border-white/10 items-end">
              <div>
                <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                  Investigate an idea
                  <span className="block text-zinc-400">or challenge a hot take</span>
                </h2>
              </div>
            </div>
            <div className="pt-6">
              <div className="space-y-4 sm:space-y-0 text-left sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-2 ring-1 ring-white/10 rounded-3xl p-2">
                  <section
                    className={`flex flex-col px-6 py-8 lg:order-none ${importFromBlueSky.isPermanent ? "bg-gradient-to-tr from-ebony to-mirage shadow-inset rounded-3xl order-first" : ""}`}
                  >
                    <div className="h-full">
                      <div className="gap-12 w-full">
                        <div>
                          <div className="flex justify-between items-center">
                            <h3 className={`text-lg ${importFromBlueSky.isPermanent ? "text-blue-400" : "text-white"}`}>
                              {importFromBlueSky.title}
                            
                            </h3>
                          </div>
                          <p className="mt-3 text-sm text-white">{importFromBlueSky.description}</p>
                        </div>
                      </div>
                      <div className="mt-8 w-full">
                        <button
                          onClick={() => dispatch(displayBlueSkySearch(true))}
                          type="button"
                          className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent group
                          bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white 
                          hover:text-white inline-flex items-center justify-center ring-1 ring-transparent flex items-center justify-center
                          gap-4"
                        >
                          <div className="text-black md:group-hover:text-white transition-all duration-200 ease-in-out">
                              Browse BlueSky
                          </div>
                          <div className="h-6 w-6 text-button_blue">
                          <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
         className="icon icon-tabler icons-tabler-outline transition-all duration-200 ease-in-out icon-tabler-brand-bluesky"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.335 5.144c-1.654 -1.199 -4.335 -2.127 -4.335 .826c0 .59 .35 4.953 .556 5.661c.713 2.463 3.13 2.75 5.444 2.369c-4.045 .665 -4.889 3.208 -2.667 5.41c1.03 1.018 1.913 1.59 2.667 1.59c2 0 3.134 -2.769 3.5 -3.5c.333 -.667 .5 -1.167 .5 -1.5c0 .333 .167 .833 .5 1.5c.366 .731 1.5 3.5 3.5 3.5c.754 0 1.637 -.571 2.667 -1.59c2.222 -2.203 1.378 -4.746 -2.667 -5.41c2.314 .38 4.73 .094 5.444 -2.369c.206 -.708 .556 -5.072 .556 -5.661c0 -2.953 -2.68 -2.025 -4.335 -.826c-2.293 1.662 -4.76 5.048 -5.665 6.856c-.905 -1.808 -3.372 -5.194 -5.665 -6.856z" /></svg>

                          </div>
                         
                        </button>
                      </div>
                    </div>
                  </section>
                 <section
                    className={`flex flex-col px-6 py-8 lg:order-none ${writeOwnInput.isPermanent ? "bg-gradient-to-tr from-ebony to-mirage shadow-inset rounded-3xl order-first" : ""}`}
                  >
                    <div className="h-full">
                      <div className="gap-12 w-full">
                        <div>
                          <div className="flex justify-between items-center">
                            <h3 className={`text-lg ${writeOwnInput.isPermanent ? "text-blue-400" : "text-white"}`}>
                              {writeOwnInput.title}
                            
                            </h3>
                          </div>
                          <p className="mt-3 text-sm text-white">{writeOwnInput.description}</p>
                        </div>
                      </div>
                      <div className="mt-8 w-full">
                        <button
                          onClick={() => dispatch(displayBlueSkySearch(false))}
                          type="button"
                          className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full
                           border-transparent bg-white hover:bg-white/10 text-black duration-200 
                           focus:ring-offset-2 focus:ring-white hover:text-white flex items-center gap-4 group
                           justify-center ring-1 ring-transparent"
                        >
                           <div className="text-black md:group-hover:text-white transition-all duration-200 ease-in-out">
                              Input an idea
                          </div>
                          <div className="h-6 w-6 text-black md:group-hover:text-white transition-all duration-200 ease-in-out">
                     <svg xmlns="http://www.w3.org/2000/svg" width={'100%'} height={'100%'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-pencil"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /></svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}
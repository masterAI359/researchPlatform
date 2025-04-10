import { useDispatch } from "react-redux";
import { presentDeleteModal } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import { useNavigate } from "react-router-dom";

export default function AccountActions () {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const actions = [
    {
      title: "Change Password",
      description: "get a link for password reset",
  
      isPermanent: false,
    },
    {
      title: "Delete Account",
      description: "permanently delete your account",
  
      isPermanent: true,
    },
  ];


  const deleteAction = actions[1]
  const changeAction = actions[0]


  function getResetLink () {

    navigate('/emailForReset')
  }


    return (
      <section className="lg:p-8">
        <div className="mx-auto 2xl:max-w-7xl py-6 lg:px-16 md:px-12 px-8 xl:px-36 items-center lg:py-24 relative w-full">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 pb-6 gap-12 border-b border-white/10 items-end">
              <div>
                <h2 className="text-3xl mt-6 tracking-tight font-light lg:text-4xl text-white">
                  Account settings 
                  <span className="block text-zinc-400">and security</span>
                </h2>
              </div>
            </div>
            <div className="pt-6">
              <div className="space-y-4 sm:space-y-0 text-left sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:grid-cols-2 ring-1 ring-white/10 rounded-3xl p-2">
                  <section
                    className={`flex flex-col px-6 py-8 lg:order-none ${changeAction.isPermanent ? "bg-gradient-to-tr from-ebony to-mirage shadow-inset rounded-3xl order-first" : ""}`}
                  >
                    <div className="h-full">
                      <div className="gap-12 w-full">
                        <div>
                          <div className="flex justify-between items-center">
                            <h3 className={`text-lg ${changeAction.isPermanent ? "text-blue-400" : "text-white"}`}>
                              {changeAction.title}
                            
                            </h3>
                          </div>
                          <p className="mt-3 text-sm text-white">{changeAction.description}</p>
                        </div>
                      </div>
                      <div className="mt-8 w-full">
                        <button
                          onClick={() => getResetLink()}
                          type="button"
                          className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent"
                        >
                          {changeAction.title === 'Change Password' ? 'Get a link' : 'Delete my account'}
                        </button>
                      </div>
                    </div>
                  </section>
                 <section
                    className={`flex flex-col px-6 py-8 lg:order-none ${deleteAction.isPermanent ? "bg-gradient-to-tr from-ebony to-mirage shadow-inset rounded-3xl order-first" : ""}`}
                  >
                    <div className="h-full">
                      <div className="gap-12 w-full">
                        <div>
                          <div className="flex justify-between items-center">
                            <h3 className={`text-lg ${deleteAction.isPermanent ? "text-blue-400" : "text-white"}`}>
                              {deleteAction.title}
                            
                            </h3>
                          </div>
                          <p className="mt-3 text-sm text-white">{deleteAction.description}</p>
                        </div>
                      </div>
                      <div className="mt-8 w-full">
                        <button
                          onClick={() => dispatch(presentDeleteModal(true))}
                          type="button"
                          className="text-sm py-2 w-full px-4 border focus:ring-2 rounded-full border-transparent bg-white hover:bg-white/10 text-black duration-200 focus:ring-offset-2 focus:ring-white hover:text-white inline-flex items-center justify-center ring-1 ring-transparent"
                        >
                          {deleteAction.title === 'Change Password' ? 'Get a link' : 'Delete my account'}
                        </button>
                      </div>
                    </div>
                  </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

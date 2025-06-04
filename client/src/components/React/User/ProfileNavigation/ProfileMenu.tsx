import { useSelector, useDispatch } from "react-redux"
import { presentArticles, presentResearch, presentManagement, presentDashboard } from "@/ReduxToolKit/Reducers/UserContent.ts/ProfileNavigationSlice";
import { RootState } from "@/ReduxToolKit/store";

export default function MobileProfileNav() {
  const showArticles = useSelector((state: RootState) => state.profileNav.displaySavedArticles)
  const showInvestigations = useSelector((state: RootState) => state.profileNav.displaySavedInvestigations);
  const showManagement = useSelector((state: RootState) => state.profileNav.displayAccountManagement);
  const showDashboard = useSelector((state: RootState) => state.profileNav.displayDashboard);
  const dispatch = useDispatch();


  return (
    <div className="fixed -bottom-0.5 block md:hidden z-50 w-full h-16 shadow-thick bg-gradient-to-tr from-ebony to-mirage">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <button
          onClick={() => {
            dispatch(presentDashboard())
          }}
          type="button" className="inline-flex flex-col items-center justify-center px-5   group">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            className={`${showDashboard ? 'text-blue-500' : 'text-zinc-400'} transition-all duration-200 ease-in-out icon icon-tabler icons-tabler-outline icon-tabler-layout-board`}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 9h8" /><path d="M12 15h8" /><path d="M12 4v16" /></svg>


          <span className={`text-xs text-zinc-400
        `}>Dashboard</span>
        </button>
        <button
          onClick={() => {
            dispatch(presentResearch())
          }}
          type="button" className="inline-flex flex-col items-center justify-center px-5   group">
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
            className={`icon icon-tabler icons-tabler-outline icon-tabler-device-ipad-search
        ${showInvestigations ? 'text-blue-500' : 'text-zinc-400'}
      `}><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M11.5 21h-5.5a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6" />
            <path d="M9 18h2" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M20.2 20.2l1.8 1.8" /></svg>
          <span className={`text-xs text-zinc-400`}>Investigations</span>
        </button>
        <button
          onClick={() => {
            dispatch(presentArticles())
          }}
          type="button" className="inline-flex flex-col items-center justify-center px-5  group">
          <svg className={`w-5 h-5 mb-2 text-xs transition-all duration-200 ease-in-out
        ${showArticles ? 'text-blue-500' : 'text-zinc-400'}
        `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
            <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
          </svg>
          <span className={`text-xs text-zinc-400`}>Articles</span>
        </button>
        <button
          onClick={() => {
            dispatch(presentManagement())
          }}
          type="button" className="inline-flex flex-col items-center justify-center px-5  group">
          <svg className={`w-5 h-5 mb-2 text-xs transition-all duration-200 ease-in-out
        ${showManagement ? 'text-blue-500' : 'text-zinc-400'}
        `} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2" />
          </svg>
          <span className={`text-xs text-zinc-400`}>Settings</span>
        </button>
      </div>
    </div>
  )
}




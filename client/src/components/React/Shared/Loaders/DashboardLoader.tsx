import DashboardLoadIcon from "../IconComponents/DashboardLoadIcon";

export default function DashboardLoader() {

    return (
        <section className="w-dvw h-dvh flex items-center justify-center">
            <div className="w-72 h-72 rounded-xl animate-shimmer bg-[length:200%_100%] text-white/10
    bg-[linear-gradient(110deg,#1a1c23_8%,#2b2f3a_18%,#1a1c23_33%)] flex items-center justify-center p-12">
                <DashboardLoadIcon />
            </div>
        </section>

    )
}
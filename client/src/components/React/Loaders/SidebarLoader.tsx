export default function SidebarLoader() {
    return (
        <aside
            id="sidebar-loader"
            className="sticky top-0 z-30 w-full md:w-44 xl:w-52 h-screen transition-transform sm:translate-x-0 bg-[#26272B]  border-r border-white/10 overflow-y-auto"
        >
            <div className="space-y-4 px-3 py-16">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-6 w-3/4 bg-gray-700 rounded animate-pulse" />
                ))}
            </div>

        </aside>
    );
};

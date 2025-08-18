import RouteLink from "../components/links/RouteLink";

export default function DesktopRouteLinks(): JSX.Element {

    const paths: string[] = [
        "/",
        "/Investigate",
        "/About"
    ];

    const titles: string[] = [
        "Home",
        "Investigate",
        "About"
    ];

    return (
        <ul className="space-y-2 w-full justify-self-end justify-end text-md list-none md:space-y-0 text-white md:m-auto inline-flex flex-nowrap md:items-center text-center md:h-8 gap-8">
            {Array.isArray(paths) && paths.map((path: string, index: number) => (
                <RouteLink path={path} title={titles[index]} />
            ))}
        </ul>
    );
};


import { Link, useLocation } from "react-router-dom"
import React from "react"

interface LinkToRoute {
    path: string,
    title: string
};

function RouteLink({ path, title }: LinkToRoute): JSX.Element {
    const location = useLocation();

    return (
        <li className={`${location.pathname === path
            ? 'text-blue-300'
            : 'text-white'} 
        hover:text-blue-300 transition-all duration-200 ease-in-out`}>
            <Link to={path}>
                {title}
            </Link>
        </li>
    )
}

export default React.memo(RouteLink)
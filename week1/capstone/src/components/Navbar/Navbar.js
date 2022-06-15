import React from 'react';
import { Link, useLocation } from "react-router-dom"

export default function Navbar(props) {
 const  location = useLocation().pathname
    return (
        <nav>
            {location == "/Dashboard" ?
                <Link to="/metronome">metro</Link>
                : location == '/metronome' ?
                    <Link to="/Dashboard">dashboard</Link>
                    : ''
            }       </nav>
    )
}
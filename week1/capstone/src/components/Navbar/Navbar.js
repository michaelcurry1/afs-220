import React from 'react';
import { Link, useLocation } from "react-router-dom"

export default function Navbar(props) {
    const location = useLocation().pathname
    return (
        <nav>
            {location == "/dashboard" ?
                <>
                    <Link to="/metronome">metro</Link>
                    <Link to="/preferences">My Page</Link>
                </>
                : location == '/metronome' ?
                    <>
                        <Link to="/dashboard">Drum Solos</Link>
                        <Link to="/preferences">My Page</Link>
                    </>
                    : location == '/preferences' ?
                        <>
                            <Link to="/dashboard">Drum Solos</Link>
                            <Link to="/metronome">metro</Link>
                        </>

                        : ''
            }
        </nav>
    )
}
import React from 'react'
import { FcMusic } from "react-icons/fc";
import '../styles/Nav.scss'

function Nav({libraryActive,setLibraryActive}) {
    return (
        <div className='Nav'>
            <h1>Chill Music Player</h1>
            <button onClick={()=>setLibraryActive(!libraryActive)} > <FcMusic id='Nav__icon' size='1.5em'/>Library</button>
        </div>
    )
}

export default Nav

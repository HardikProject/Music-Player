import React from 'react'

function LibrarySong({song}) {
    return (
        <div className='librarySong'>
            <img src={song.cover} alt={song.name}  />
            <div className="librarySong__detail">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong

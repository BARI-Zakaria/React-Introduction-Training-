import React, { useState } from 'react';

const players = ["Walker", "Arnold", "Hakimi"];

function Filter(){
    const [searchValue, setSearchValue] = useState("")

    return(

        <div>
            <h2>Search Players</h2>
            <input type="text" name="search" value={setSearchValue} onChange={e => setSearchValue(e.target.value)}/>
            <ul>

                {players.filter(name => name.match(new RegExp(searchValue, "i"))).map(name => {
                    return <li>{name}</li>
                    })}

            </ul>
        </div>
    )
}
export default Filter;   

// .filter(player => player.match(new RegExp(searchValue, "i")))
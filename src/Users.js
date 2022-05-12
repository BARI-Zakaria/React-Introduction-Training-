import React, { useState } from 'react';
import User from './User';

function Users(){
 
const us = [
    {
        ID : "07",
        Name : "Mister You",
        Adress : "Casablanca"
    },
    {
        ID : "13",
        Name : "SCH",
        Adress : "Marseilles"
    },
    // {
    //     ID : "91",
    //     Name : "PNL Andérieu",
    //     Adress : "Corbeil-Essonnes"
    // },
    // {
    //     ID : "93",
    //     Name : "Kalash Criminel",
    //     Adress : "Seine-Saint-Denis"
    // },
    // {
    //     ID : "94",
    //     Name : "Lacrim",
    //     Adress : "Ivry-sur-Seine"
    // },
]
const list = us.map((item)=> <User ID={item.ID} Name={item.Name} Adress={item.Adress}/>)

return(list);
}





export default Users;
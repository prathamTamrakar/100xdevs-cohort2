/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'

function CardWrapper({innerComponent,children}){
    // Create a div which has a border 
    // asn inside the div , renders the prop
    return(
        <div style={{border:"2px solid black", padding:5}}>
            {innerComponent}
            {children}
        </div>
    )
}



export default CardWrapper
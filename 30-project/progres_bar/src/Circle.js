import React from 'react'
import "./App.css";


function Circle({color,span,currentActive}) {
    console.log(currentActive);
    return (
        <>
            <div className={`circle ${color}`}>{span}</div>
        </>
    )
}

export default Circle

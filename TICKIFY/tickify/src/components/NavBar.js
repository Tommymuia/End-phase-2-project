import React from "react";

function NavBar ({handleView}){
    return ( 
        <div id="NavBar">
            <button onClick={()=>handleView("home")}>HOME</button>
            <button onClick={()=>handleView("events")}>EVENTS</button>
            <button onClick={()=>handleView}

        </div>



    )




}
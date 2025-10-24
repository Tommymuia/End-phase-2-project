import React from "react";

function NavBar ({handleView}){
    // this will render the button according to the value passed down by app.js
    // cheki uradi
    return (  
        <div id="NavBar">
            <button onClick={()=>handleView("home")}>HOME</button>
            <button onClick={()=>handleView("events")}>EVENTS</button>
            <button onClick={()=>handleView("cart")}>CART</button>
            <button onClick={()=>handleView("sign up")}><span>SIGN UP</span></button>
        </div>
    )

}
export default NavBar;
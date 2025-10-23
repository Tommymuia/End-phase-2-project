import React,{useState} from "react"
import EventList from "./EventList"
function NavBar(){
    const [view , setView] = useState("home")
// we used states to be able to change dynamically change the values of the states
// so we run handle biew and ensure that each vaue is false so that it only shows when  a different value of the fucntion is returned upon click of the specific button and then rendered
//theres still the option
// have a function that renders the state to change according to the button pressed
    function HandleView(selectView){
        setView (selectView)
    }

    return(
    <div id="navbar">
        <button onClick={() => HandleView("home")}>HomeBar</button>
        <button onClick={() => HandleView("events")}>EventBar</button>
        <button onClick={() => HandleView("cart")}>Go To Cart</button>
        
    {view === "events" && <EventList/>}
    </div>
    )

}
export default NavBar

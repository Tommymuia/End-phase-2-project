import React,{useState} from "react"

function NavBar(){
    const [showEvents , setShowEvents] = useState(false)
    const [showHome , setShowHome] = useState(false)
    const [showCart , setShowCart] = useState(false)

    function HandleView(view){
        setShowHome(false)
        setShowEvents(false)
        setShowCart(false)
        if(view === "home") setShowHome(true)
        if(view === "events") setShowEvents(true)
        
    }

    return(
    <div id="navbar">
        <button onClick={setShowEvents(!showEvents)}>SEARCH EVENTS</button>
        <
    </div>
    )
}
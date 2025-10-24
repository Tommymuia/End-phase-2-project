import React ,{useState} from "react";
import NavBar from "./components/NavBar";
import EventList from "./components/EventList";
import Home from "./components/Home"
import ShowCart from "./components/ShowCart"

// app to control the main root in our html 
function App (){
    const [view , setView] = useState("home")
    // our setter function to set thhe view that will be rendered according to the butto pressed
    //view is the state memory

    function HandleView (selectedView){
        setView(selectedView)
        //  this is the function to be passed down to navbar to handle the state
        //its give it as a prop to our child which then runs the function according to the button pressed
        //this changes the selected view  which our setter now gives the function
    }
    return (
        <div>
            <NavBar handleView={HandleView}/>

        {view ==="events"  && <EventList/>}
        {view === "home" && <Home/>}
        {view === "cart" && <ShowCart/>}
        {view === "sign up" && <ShowSignUp/>}

        </div>
    )
}
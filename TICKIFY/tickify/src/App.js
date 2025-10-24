import React ,{useState} from "react";
import NavBar from "./components/NavBar";
import EventList from "./components/EventList";
import Home from "./components/Home"
import Cart from "./components"
import { useViewTransitionState } from "react-router-dom";

// app to control the main root in our html 
function App (){
    const [view , setView] = useState("home")
    // our setter function to set thhe view that will be rendered according to the butto pressed
    //view is the state memory

    function HandleView (selectedView){
        setView(selectedView)
        //  this is the function to be passed down to navbar to handle the state
        //its give and a 
    }
    return (
        <div>
            <NavBar handleView={HandleView}/>
        





        </div>
    )
}
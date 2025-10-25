import React ,{useState} from "react";
import NavBar from "./components/NavBar";
import EventList from "./components/EventList";
import Home from "./components/Home"
import ShowSignUp from "./components/ShowSignUp"

// app to control the main root in our html 
function App (){
    const [view , setView] = useState("home")
    const [users , setUsers] = useState([])
    const [cart , setCart] = useState([])
     // our setter function to set thhe view that will be rendered according to the butto pressed
    //view is the state memory

    function HandleView (selectedView){
        setView(selectedView)
        //  this is the function to be passed down to navbar to handle the state
        //its give it as a prop to our child which then runs the function according to the button pressed
        //this changes the selected view  which our setter now gives the function
    }

    function addToCart(event){
      setCart ([...cart , event]) //nataka tu select the event chosen 
      // it first takes the contents from cart before using the spread operator then it adds the mew event to that array(event) 
      //this then will update our cart
    }
    function removeFromCart(event.id){
      setCart(cart.filter((item)=>item.id !== eventId))
    }
    function addUser(newUser){
        setUsers([...users , newUser])
        console.log("added user :" , newUser)
    }
    return (
        <div>
            <NavBar handleView={HandleView}/>
        {view ==="events"  && <EventList addToCart = {addToCart}/>}
        {view === "home" && <Home/>}
        {view === "sign up" && <ShowSignUp addUser = {addUser}/>}
        {view === "cart" && <ShowCart cart={cart} removeFromCart ={removeFromCart}/>}

        </div>
    )
}
export default App
// ensure that the states that you save in app are the ones that are not temporary or that should stick to the website eg the sign up details of a buyer
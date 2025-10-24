import React, {useState , useEffect} from "react";

function SignUp ({addUser}) {
    // const [formData , setFormData] = useState({
    //     name : "",
    //     email : ""
        
    // })
    const [name , setName] = useState("")
    const [email , setEmail] = useState("");

    function handleSubmit (e) {
        // we need to prevent the default behaviour of input reloading the page 
        e.preventDefault ()
        
        const newUser = {name , email}
        //we create this variable to store the states and the data in them 

        fetch("http://localhost:3000/users" , {
            method : 'POST' , 
            headers : {"Content-Type"  : "application/json"},
            body : JSON.stringify(newUser), 
             })//remeber that post equests always give a response when posted 
             .then((res)=>res.json())
             .then((data)=>{
                console.log("the response given by server" , data)
                addUser(data)
                // soon as the data is given we want to reset the state to empty 
                setName("")
                setEmail("");
             })
             //we then want to catch any errors that may come throguh
             .catch
    }
}

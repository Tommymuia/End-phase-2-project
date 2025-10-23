import React ,{ useEffect, useState } from "react";

function EventList (){
    const [eventsVar , setEvent] = useState([])
        const [showSelected , setSelectedCard] = useState(null)
            function HandleSelected (event){
                    setSelectedCard(event)
                        }
                        //useEffect is used to handle code that runs outside the normal render
                        // the dependency array controls when the efftct runs ...
                        // useEffect renders once atleast since a depedency array is given ...then it destroys itself to run again if value was passed in 
                        // in our case we are using the json data as it is an api call
                        //when no dependency array is passed it runs after every render .... 
                        //but if a state is given it reruns everytime the value (dependency array)is given
                        //remember that the json passed in 
                        useEffect(()=>{
                            fetch ('/db.json')
                                .then((res)=> res.json())
                                    .then((data)=>setEvent(data.events))
                                        .catch((err)=> console.error("error concieved :", err))
                                        } , [])
                                        return ( <div>
                                            {!showSelected ? (
                                                <div className="Event-list">
                                                        {
                                                                    eventsVar.map((event)=>{
                                                                                    return <EventCard key={event.id} event = {event} onSelect ={()=>HandleSelected(event)} />
                                                                                                
                                                                                                        }
                                                                                                    }
                                                                                                           )
                                                                                                                 : (<div> 
                                                                                                                         <EventCard key/>
                                                                                                                                 
                                                                                                                                         
                                                                                                                                                 </div> )
                                                                                                                                                     )
                                                                                                                                                     
                                                                                                                                                     }
                                                                                                                                                     export default EventCard
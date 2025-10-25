import React , {useState , useEffect} from "react"

function EventList (){
  // we create a state to save the incoming api data (rember state is reacts memory and will rerender according the data given) 
  const [events , setEvents] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:3001/events')
    .then(res => res.json())
    .then(data => setEvents(data))
    .catch((err) => console.error("Error getting events:" , err))
  } , [])

  // useeffeect to bring in the json since it smth run out of the code render (async)
  //we then save that data in state to cause another rerender to now display the ui if the condtion is met
  //we use defensive rendering incase of json errors ... this is just condtional rendering only if the state event is change d according to the values passed
return (
  <div className="event-list">
    {events.length === 0 ? (
      <p>Loading events... please wait</p>
    ) : (
      events.map((event) => (
        <div key={event.id} className="eventcard">
          <img src={event.image} alt={event.title} />
          <h2>{event.title}</h2>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <p>Ksh {event.price}</p>
          <button>Buy Ticket</button>
        </div>
      ))
    )}
  </div>
)
}
export default EventList ;


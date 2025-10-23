import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import EventDetails from "./EventDetails";

// This component handles
// - Fetching event data from db.json
// - Displaying all event cards
// - Showing one selected event in detail when clicked by calling the EventCard COMPONENT
function EventList() {
  // We use state to keep track of our list of events
    // "eventsVar" holds the fetched list, setEvent is our setter function 
      const [eventsVar, setEvent] = useState([]);

        // "selectedEvent" stores the event the user clicks on
        // remember state is memory of everything that happens in the ui
          const [selectedEvent, setSelectedEvent] = useState(null);

            // useEffect is used to handle code that runs outside the normal render flow
                      // If we pass a state variable inside it, the effect will re-run every time that value changes.
                        useEffect(() => {
                            fetch("/db.json")
                                  .then((res) => res.json()) 
                                        .then((data) => setEvent(data.events)) //remember state is the memory for react so we store our data in th state 
                                              .catch((err) => console.error("Error fetching events:", err));
                                                }, []); // empty array = run only once .... this will bring in the json before other renders and will run once

                                                  // Defensive rendering:
                                                    // Sometimes fetch fails or returns undefined, so we check
                                                      // that the data is an array before calling map() — prevents crashing.
                                                        if (!Array.isArray(eventsVar)) {
                                                            return <p>Loading...</p>;
                                                              } // this is just to display the page before the json data is met

                                                                // Return section:
                                                                  // - If no event is selected, we show the list of EventCards
                                                                    // - If one is selected, we show that event’s details instead
                                                                      return (
                                                                                         <div>
                                                                            
                                                                                                          {!selectedEvent ? (
                                                                                                                  <div className="event-list">
                                                                                                                            {eventsVar.map((event) => (
                                                                                                                                        // Each card gets the event data + onSelect callback
                                                                                                                                                    // The arrow function ensures HandleSelected runs only when clicked
                                                                                                                                                                <EventCard
                                                                                                                                                                              key={event.id}
                                                                                                                                                                                            event={event}
                                                                                                                                                                                                          onSelect={() => setSelectedEvent(event)}
                                                                                                                                                                                                                      />
                                                                                                                                                                                                                                ))}
                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                              ) : (
                                                                                                                                                                                                                                                      // When one event is selected → show its details
                                                                                                                                                                                                                                                              <EventDetails
                                                                                                                                                                                                                                                                        event={selectedEvent}
                                                                                                                                                                                                                                                                                  onBack={() => setSelectedEvent(null)} // clicking “Back” clears selection
                                                                                                                                                                                                                                                                                          />
                                                                                                                                                                                                                                                                                                )}
                                                                                                                                                                                                                                                                                                    </div>
                                                                                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                      }

                                                                                                                                                                                                                                                                                                      export default EventList;
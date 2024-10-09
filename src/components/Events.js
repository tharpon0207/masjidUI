import Event from "./Event"
import { eventsList } from "./exportLists/eventsList"

export default function Events(){
    const events = eventsList.map(ev => 
        <div key={ev.id}>
            <div className="eventContainer">
            <Event Month={ev.month} Day={ev.day} Start={ev.start} End={ev.end} Title={ev.title} Desc={ev.desc}/>
            </div>
        </div>
    );
    
    return(
        <div>
            <div className="eventsContainer">
                    <p className="eventsTitle">Events</p>
                    <div className="eventsMiniContainer">
                        {events}
                    </div>
            </div>
        </div>
    )
}
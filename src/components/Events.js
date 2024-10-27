import Event from "./Event"
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { api_host, axiosConfig } from "../config/data";

export default function Events(){
    const [data, setData] = useState(null);

    useEffect(() => {
        // Using an async function within useEffect
        const fetchData = async () => {
            try {
                const response = await Axios.get(`${api_host}/event?limit=5`, axiosConfig);
                setData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    if (!data) {
        return <div>Loading...</div>;
    }

    const events = data.events.map(ev => 
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
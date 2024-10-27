import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { api_host, axiosConfig } from "../config/data";

export default function Announcement({title, date, body}){
    const [data, setData] = useState(null);

    useEffect(() => {
        // Using an async function within useEffect
        const fetchData = async () => {
            try {
                const response = await Axios.get(`${api_host}/announcement?limit=5`, axiosConfig);
                console.log("RS DATA :" + response.data);
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

    const announcements = data.announcements.map(an =>
        <div key={an.id}>
            <div className="announcement">
                <div className="anTopDiv">
                    <div className="announcementIconContainer" />
                    <text className="anTitle">{an.title}</text>
                </div>
                <div className="anDate">
                    <i>{an.date}</i>
                </div>
                <div className="anBody">
                    {an.desc}
                </div>
            </div>
        </div>
    )
    
    return(
        <div>
            {announcements}            
        </div>
    )
}
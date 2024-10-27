import Prayer from "./Prayer";
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { api_host, axiosConfig } from "../config/data";

export default function Prayers() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Using an async function within useEffect
        const fetchData = async () => {
            try {
                const response = await Axios.get(`${api_host}/prayertimes`, axiosConfig);
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

    const prayers = data.time.map(p =>
        <div key={p.prayer}>
            <Prayer Name={p.prayer} Time={p.time} />
        </div>
    );

    return (
        <div className="prayersDiv">
            {prayers}
        </div>
    );
}

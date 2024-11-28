import '../App.css';
import AboutUs from '../components/AboutUs';
import Intro from '../components/Intro';
import OurServices from '../components/OurServices';
import Events from '../components/Events';
import Announcements from '../components/Announcements';
import Donations from '../components/Donations';
import Contact from '../components/Contact';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { api_host, axiosConfig } from "../config/data";
import NavBar from '../components/NavBar';

export default function HomePage(){ 
    const [data, setData] = useState(null);
    const [Edata, setEData] = useState(null);
    
    useEffect(() => {
        // Fetch announcements data
        const fetchData = async () => {
            try {
                const response = await Axios.get(`${api_host}/announcement?limit=5`, axiosConfig);
                setData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Fetch events data
        const fetchEventData = async () => {
            try {
                const response = await Axios.get(`${api_host}/event?limit=5`, axiosConfig);
                setEData(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchEventData();
    }, []);

    return(
        <div className='homePageDiv'>
            <div id='Top'>
                <Intro/>
            </div>

            <NavBar />
            
            <div className='bannerContainer'> 
                <div>
                    { data && data.announcements.length > 0 &&
                        <div>
                            <Announcements/>
                        </div>
                    }
                </div>
                <div>
                    <AboutUs />
                </div>
                <div>
                    <OurServices/>
                </div>
                    {Edata && Edata.events.length > 0 &&
                        <div id='Events'>
                            <Events/>
                        </div>
                    }
                <div id='Donations'>
                    <Donations/>
                </div>
                <div id='contactDiv'>
                    <Contact />
                </div>
            </div>  
        </div>
    );
}

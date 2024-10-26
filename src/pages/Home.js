import '../App.css';
import AboutUs from '../components/AboutUs';
import { Link } from 'react-router-dom';
import HJM from '../images/logo3.png'
import Intro from '../components/Intro';
import OurServices from '../components/OurServices';
import Events from '../components/Events';
import Announcements from '../components/Announcements';
import { announcementList } from '../components/exportLists/announcementList';
import Donations from '../components/Donations';
import Contact from '../components/Contact';
import {Link as ScrollLink} from 'react-scroll';

export default function HomePage(){ 
    return(
        <div className='homePageDiv'>
            <div id='Top'>
            <Intro/>
            </div>
            <div className = {"navBar"}>
                <div style={{float: 'left'}} className='navbarImgContainer'>
                    <img src={HJM} alt='HJM' style={{float: 'left'}}/>
                </div>
                <ScrollLink to='Top' spy={true} smooth={true} offset={0} duration={600} className='navbarButton'>Home</ScrollLink>
                <ScrollLink to='Events' spy={true} smooth={true} offset={0} duration={500} className='navbarButton'>Events</ScrollLink>
                <ScrollLink to='Donations' spy={true} smooth={true} offset={-210} duration={500} className='navbarButton'>Donate</ScrollLink>
                <Link to="/memberform" className='navbarButton'>Membership</Link>
                <Link to="/studentform" className='navbarButton'>Student </Link>
                <ScrollLink to='Contact' spy={true} smooth={true} offset={0} duration={800} className='navbarButton'>Contact Us</ScrollLink>
                <a href='https://www.hatfieldjamemasjid.org/' target="_blank" rel="noreferrer" className='navbarButton'>Old Site</a>
            </div>
                <div className='bannerContainer'> 
                    <div>
                        { announcementList.length > 0 &&
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
                    <div id='Events'>
                        <Events/>
                    </div>
                    <div id='Donations'>
                        <Donations/>
                    </div>
                </div>   
                <div id='Contact'>
                    <Contact />
                </div>
        </div>
    )
}
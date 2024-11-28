import '../App.css';
import {Link as ScrollLink} from 'react-scroll';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import HJM from '../images/logo3.png';
import { useState } from "react";

const NavBar = () => {
    const location = useLocation();
    const isDesktop = useMediaQuery({minWidth: 1500})
    const [selected, setSelected] = useState(false);
    const select = () => setSelected(!selected);

    return(
        <div className="navBar">
            {isDesktop ?
                <>
                <div style={{float: 'left'}} className='navbarImgContainer'>
                    <img src={HJM} alt='HJM' style={{float: 'left'}}/>
                </div>
            
                {location.pathname === '/' ?
                <>
                    <ScrollLink to='Top' spy={true} smooth={true} offset={0} duration={600} className='navbarButton'>Home</ScrollLink>
                    <ScrollLink to='Events' spy={true} smooth={true} offset={0} duration={500} className='navbarButton'>Events</ScrollLink>
                    <ScrollLink to='Donations' spy={true} smooth={true} offset={-210} duration={500} className='navbarButton'>Donate</ScrollLink>
                </>
                :
                <>
                <Link to="/" className='navbarButton'>Home</Link>
                </>
    
                }
                <Link to="/memberform" className='navbarButton'>Membership</Link>
                <Link to="/studentform" className='navbarButton'>Student</Link>
                {location.pathname === '/' &&
                <>
                    <ScrollLink to='contactDiv' spy={true} smooth={true} offset={0} duration={800} className='navbarButton'>Contact Us</ScrollLink>
                </>
                }
                <a href='https://www.hatfieldjamemasjid.org/' target="_blank" rel="noreferrer" className='navbarButton'>Old Site</a>
                </>
            :
            <div className="menuDiv">
                <button className={selected ? "navBarButton-active" : 'navbarButton'} onClick={select} type="button"> Menu </button>
                {selected &&
                <div className="menuDropDown">
            
                {location.pathname === '/' ?
                <>
                    <ScrollLink to='Top' spy={true} smooth={true} offset={0} duration={600} className='menuButton'>Home</ScrollLink>
                    <ScrollLink to='Events' spy={true} smooth={true} offset={0} duration={500} className='menuButton'>Events</ScrollLink>
                    <ScrollLink to='Donations' spy={true} smooth={true} offset={-210} duration={500} className='menuButton'>Donate</ScrollLink>
                </>
                :
                <>
                <Link to="/" className='menuButton'>Home</Link>
                </>
    
                }
                <Link to="/memberform" className='menuButton'>Membership</Link>
                <Link to="/studentform" className='menuButton'>Student</Link>
                {location.pathname === '/' &&
                <>
                    <ScrollLink to='contactDiv' spy={true} smooth={true} offset={0} duration={800} className='menuButton'>Contact Us</ScrollLink>
                </>
                }
                <a href='https://www.hatfieldjamemasjid.org/' target="_blank" rel="noreferrer" className='menuButton'>Old Site</a>
                    </div>
                }
            </div>
            }
            </div>
    )
}

export default NavBar;
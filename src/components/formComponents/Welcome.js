import '../../App.css';
import bismillah from '../../images/bismillah.png';
import { Link } from 'react-router-dom';
import HJM from '../../images/logo3.png';

export default function Welcome(){
   return(
    <div>
        <div className = {"navBar"}>
                <div style={{float: 'left'}} className='navbarImgContainer'>
                    <img src={HJM} alt='HJM' style={{float: 'left'}}/>
                </div>
                <Link to="/" className='navbarButton'>Home</Link>
                <Link to="/studentform" className='navbarButton'>Student </Link>
                <a href='https://www.hatfieldjamemasjid.org/' target="_blank" rel="noreferrer" className='navbarButton'>Old Site</a>
            </div>
        <div className='welcometext'>
            <div className='introContainer'>
            <img src={bismillah} alt='bismillah' style={{marginTop: '2%'}} />
            <p style={{marginTop: ".5%"}} >Become a Member</p>
            </div>
       
        </div>
        <div className='quote'>
            <p>"Those who build a mosque for Allah, Allah will build for them a house in Paradise"</p>
            <p className='quotecite'>-Sahih Bukhari and Muslim</p>
        </div>
    </div>)
}
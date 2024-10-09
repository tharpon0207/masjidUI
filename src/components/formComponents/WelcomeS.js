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
                <Link to="/memberform" className='navbarButton'>Membership</Link>
                <a href='https://www.hatfieldjamemasjid.org/' target="_blank" rel="noreferrer" className='navbarButton'>Old Site</a>
            </div>
        <div className='welcometext'>
            
            <div className='introContainer'>
            <img src={bismillah} alt='bismillah' style={{marginTop: '2%'}} />
            <p style={{marginTop: ".5%"}} >Become a Student</p>
            </div>
       
        </div>
        <div className='quote'>
            <p>“The best of you are those who learn the Quran and teach it.”</p>
            <p className='quotecite'>-Sahih Bukhari and Muslim</p>
            <p style={{color: 'red', marginBottom: '.5%'}}>NOTE: This form is not complete yet. You will be unable to submit it.</p>
            <p style={{color: 'red', marginTop: '0%'}}>Please register in person or through the <a href='https://www.hatfieldjamemasjid.org/student-registration.html' rel='noreferrer' style={{color: 'blue'}} target='_blank'>old site.</a></p>
        </div>
    </div>)
}
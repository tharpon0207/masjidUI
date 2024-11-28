import '../../App.css';
import bismillah from '../../images/bismillah.png';
import NavBar from '../../components/NavBar';

export default function Welcome(){
   return(
    <div>
        <NavBar />
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
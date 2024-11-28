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
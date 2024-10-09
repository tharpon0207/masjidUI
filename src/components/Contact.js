import '../App.css';
import ContactBlock from './formComponents/ContactBlock';
import Pin from '../images/mapPin.webp';
import Email from '../images/email.png';
import Phone from '../images/phone.png';

export default function Contact(){
    let mapLink = 'https://www.google.com/maps/place/Hatfield+Jame+Masjid/@40.272614,-75.2894718,17z/data=!4m5!3m4!1s0x89c6a1a0d492c06d:0x60a34f41cf940c5e!8m2!3d40.2725839!4d-75.2873132?shorturl=1';
    let mail = 'mailto: hatfieldjamemasjid@yahoo.com';
    
    return(
        <div className='contactDiv'>
            <p className="contacttext" style={{marginBottom: '3%', fontSize: '300%', fontWeight: '700', marginTop: '3%'}}>For questions or help, please contact us.</p>
            <ContactBlock src={Pin} alt={'Map Pin'} label={"1511 Cowpath Rd, Hatfield, PA 19440"} href={mapLink} />
            <ContactBlock src={Email} alt={'Email'} label={"hatfieldjamemasjid@yahoo.com"} href={mail} />
            <ContactBlock src={Phone} alt={'Phone'} label={'+1 215 362 5771'} href={''} />
            <div className='copyrightContainer'>
                <p>
                    Copyright© 2024. All Rights Reserved <span style={{color: 'darkgoldenrod'}}>HatfieldJameMasjid.org</span>
                </p>
            </div>
        </div>
    )
}
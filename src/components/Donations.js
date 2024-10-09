import '../App.css'

export default function Donations(){
    return(
        <div className='donationsContainer'>
            <div className='donationsTitle'>
                Donations
            </div>
            <p className='donationQuote'>
            <i>"And establish prayer and give Zakat, and whatever good you put forward for yourselves – you will find it with Allah"</i>
            </p>
            <p className='dQuoteCiting'>
                -2:110 Quran
            </p>
            <div className='donateButtonDivs'>
                <a className='donateButton' href='https://www.paypal.com/donate?token=X4DwKQfj_99awxekjg3zBus6Ssu6VADp0kM53rD_8Tt5aar4RF4J3jUpFwAfcHFJ3hLuWdFBglbc4Dq8' rel='noreferrer' target='_blank'>
                    <p className='buttonText'>DONATE VIA PAYPAL</p>
                </a>
                <div className='ORdiv'>
                <p className='OR'>
                    OR
                </p>
                </div>
                <a className='donateButton' href='https://www.google.com/maps/place/Hatfield+Jame+Masjid/@40.272614,-75.2894718,17z/data=!4m5!3m4!1s0x89c6a1a0d492c06d:0x60a34f41cf940c5e!8m2!3d40.2725839!4d-75.2873132?shorturl=1' rel='noreferrer' target='_blank'>
                    <p className='buttonText'>DONATE VIA MAIL</p>
                </a>
            </div>
        </div>
    )
}
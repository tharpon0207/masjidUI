import '../App.css';
import Prayers from './Prayers';
import bismillah from '../images/bismillahwhite.png'

export default function Intro(){
    return(
    <div id='Top'>
        <div className='TopDiv'>
            <img src={bismillah} alt="bismillah" style={{marginTop: '1em'}}/>
            <h1 className='homePageWelcomeText'>Welcome to the Hatfield Jame Masjid!</h1>
            <h3 style={{color: "white"}}>In The Name of Allah, the Merciful, the Compassionate</h3>
            <div className='prayersDiv'>
                <div className="prayersDiv">
                    <Prayers/>
                </div>
            </div>
        </div>
    </div>
    )
};
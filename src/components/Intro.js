import '../App.css';
import Prayers from './Prayers';
import bismillah from '../images/bismillahwhite.png'
import { useMediaQuery } from 'react-responsive';

export default function Intro(){

    const isDesktop = useMediaQuery({ minWidth: 1400 });

    return(
    <div id='Top'>
        <div className='TopDiv'>
            <img src={bismillah} alt="bismillah" style={{marginTop: '1em'}}/>
            <h1 className='homePageWelcomeText'>Welcome to the Hatfield Jame Masjid!</h1>
            <h3 style={{color: "white"}}>In The Name of Allah, the Merciful, the Compassionate</h3>
            <div>
                {isDesktop &&
                    <div>
                        <Prayers/>
                    </div>
                }
            </div>
        </div>
    </div>
    )
};
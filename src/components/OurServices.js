import Service from "./Service";
import quranclass from "../images/quranclass.jpg"
import counceling from '../images/counceling.jpg'
import nikah from '../images/nikah.jpg'
import hadithschool from '../images/hadithschool.jpg'
import funeral from '../images/funeral.jpeg'
import academy from '../images/academy.jpg'

export default function OurServices(){
    return(
        <div>
            <div className="ourServicesContainer" >
                <h1 className="ourServicesTitle">Our Services</h1>
                <div className="containerOfTwo">
                    <div className="serviceContainer">
                        <Service Img={quranclass} Start={"10:30 am"} End={"1:00 pm"} Desc={"Quran Class"}/>
                        <Service Img={counceling} Start={"2:00 pm"} End={"7:00 pm"} Desc={"Counceling"}/>
                        <Service Img={nikah} Start={"2:00 pm"} End={"7:00 pm"} Desc={"Nikah Services"}/>
                    </div>
                    <div className="serviceContainer">
                        <Service Img={hadithschool} Start={"7:45 pm"} End={"8:15 pm"} Desc={"Hadith School"}/>
                        <Service Img={funeral} Start={"9:00 am"} End={"1:00 pm"} Desc={"Funeral Services"}/>
                        <Service Img={academy} Start={"8:00 am"} End={"3:00 pm"} Desc={"Our Academies"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
import "../App.css";
import { useState } from 'react';
import MiniInput from "./formComponents/MiniInput.js";
import SignupInput from "./formComponents/SignupInput.js";
import Dropdown from "./formComponents/Dropdown.js";
import { NumberInput } from "./formComponents/SignupInput.js";
import ContactBlock from "./formComponents/ContactBlock.js";
import Pin from '../images/mapPin.webp';
import Email from '../images/email.png';
import Phone from '../images/phone.png';
import Axios from 'axios';





export default function Form() {
    let mapLink = 'https://www.google.com/maps/place/Hatfield+Jame+Masjid/@40.272614,-75.2894718,17z/data=!4m5!3m4!1s0x89c6a1a0d492c06d:0x60a34f41cf940c5e!8m2!3d40.2725839!4d-75.2873132?shorturl=1';
    let mail = 'mailto: hatfieldjamemasjid@yahoo.com';
    const [page, setPage] = useState(0);
    const formTitles = ['Student Registration'];

    const [formData, setFormData] = useState({
        student_id: '',
        student_first_name: '',
        student_last_name: '',
        parent_first_name: '',
        parent_last_name: '',
        email: '',
        phone_number: '',
        gender: 'nothing',
        subscription: 10,
        status: 1
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setPage(1);
        formData.gender = (formData.gender === "Male") ? "M" : "F";
        formData.subscription = parseInt(formData.subscription)
        console.log(JSON.stringify(formData));
        
          let axiosConfig = {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                    "Access-Control-Allow-Origin": "*",
                }
              };
              
              Axios.post('http://127.0.0.1:10010/member', JSON.stringify(formData), axiosConfig)
              .then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
              })
              .catch((err) => {
                console.log("AXIOS ERROR: ", err);
              })

    }

    const pageDisplay = () => {
        if (page === 0) {
            return (<div>

                <MiniInput sectionHeader={'Student Name'} box1={'First Name'} box2={'Last Name'} type1={'text'} type2={'text'}
                    placeholder1={'First Name'} placeholder2={'Last Name'} value1={formData.student_first_name} value2={formData.student_last_name}
                    onchange1={(e) => setFormData({ ...formData, student_first_name: e.target.value })} onchange2={(e) => setFormData({ ...formData, student_last_name: e.target.value })} maxlength={30} />
                <MiniInput sectionHeader={'Parent Name'} box1={'First Name'} box2={'Last Name'} type1={'text'} type2={'text'}
                    placeholder1={'First Name'} placeholder2={'Last Name'} value1={formData.parent_first_name} value2={formData.parent_last_name}
                    onchange1={(e) => setFormData({ ...formData, parent_first_name: e.target.value })} onchange2={(e) => setFormData({ ...formData, parent_last_name: e.target.value })} maxlength={30} />

                <SignupInput type={"text"} text={"ex. ahmed01"} label={"Create A Student ID"} value={formData.student_id} onChange={(event) => setFormData({ ...formData, student_id: event.target.value })} required={true} />
                <SignupInput type={"email"} text={"placeholder@gmail.com"} label={"Email"} value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required={false} />
                <SignupInput type={"tel"} text={"123-456-7890"} label={"Phone Number"} value={formData.phone_number} onChange={(event) => setFormData({ ...formData, phone_number: event.target.value })} required={true} />

                <Dropdown label={'Student Gender'} op1={'Male'} op2={'Female'} size={'120%'} value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} />
                
                <NumberInput type={"number"} text={"10"} label={"Subscription/Month ($)"} onChange={(event) => setFormData({ ...formData, subscription: event.target.value })} value={formData.subscription} min={10} max={9999} required={true} />
                
            </div>);

        } else if (page === 1) {
            return (
                <div className="titleContainer">
                    <h1 className="thankyou">Thank You!</h1>
                    <p className="contacttext">For questions or to update information, please contact us.</p>
                    <ContactBlock src={Pin} alt={'Map Pin'} label={"1511 Cowpath Rd, Hatfield, PA 19440"} href={mapLink} />
                    <ContactBlock src={Email} alt={'Email'} label={"hatfieldjamemasjid@yahoo.com"} href={mail} />
                    <ContactBlock src={Phone} alt={'Phone'} label={'+1 215 362 5771'} href={''} />
                </div>
            )
        }
    }

    return (
        <div style={{ textAlign: 'center', alignItems: 'center', display: 'flex' }}>
            <fieldset>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className="formPageTileContainer">
                            <div style={{ textAlign: 'center' }}>
                                <h3 className="formPageTitle">{formTitles[page]}</h3>
                            </div>
                            <div>
                                {pageDisplay()}
                            </div>
                        </div>

                        <div>
                            <div style={{ textAlign: 'center' }}>
                                <div> <input type="submit" value={"submit"} className="submitButton" disabled /></div>
                            </div>
                        </div>
                    </div>
                </form>
            </fieldset>
        </div>
    )
}
import "../App.css";
import MiniInput from "./formComponents/MiniInput.js";
import SignupInput from "./formComponents/SignupInput.js";
import Dropdown from "./formComponents/Dropdown.js";
import { AddressLine } from "./formComponents/SignupInput.js";
import { NumberInput } from "./formComponents/SignupInput.js";
import Declaration from "./formComponents/Declaration.js";
import ContactBlock from "./formComponents/ContactBlock.js";
import Pin from '../images/mapPin.webp';
import Email from '../images/email.png';
import Phone from '../images/phone.png';

import React, { useState } from 'react';
import Axios from 'axios';
import { api_host, axiosConfig } from "../config/data";

export default function Form() {
    let mapLink = 'https://www.google.com/maps/place/Hatfield+Jame+Masjid/@40.272614,-75.2894718,17z/data=!4m5!3m4!1s0x89c6a1a0d492c06d:0x60a34f41cf940c5e!8m2!3d40.2725839!4d-75.2873132?shorturl=1';
    let mail = 'mailto: hatfieldjamemasjid@yahoo.com';
    const [page, setPage] = useState(0);
    const formTitles = ['Contact Information', 'Location/Banking Information'];

    function togglePage() {
        if (formData.gender === 'nothing' || formData.share_info === 'nothing') {
            return;
        } else {
            if (page === 0) {
                setPage(1);
            } else if (page === 1) {
                setPage(0);
            };
        };
    };

    const [formData, setFormData] = useState({
        member_id: '',
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        gender: 'nothing',
        share_info: 'nothing',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        subscription: 10,
        auto_withdrawal: 'nothing',
        status: 1
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Creating a new object instead of mutating the state directly
        const updatedFormData = {
            ...formData,
            gender: formData.gender === "Male" ? "M" : "F",
            share_info: formData.share_info === "Share" ? 1 : 0,
            auto_withdrawal: formData.auto_withdrawal === "yes" ? 1 : 0,
            subscription: parseInt(formData.subscription)
        };

        try {
            const jsonData = JSON.stringify(updatedFormData);
            const response = await Axios.post(`${api_host}/member`, jsonData, axiosConfig);
            console.log("RS DATA :", response.data);
            // Handle any state update based on the response if needed
        } catch (error) {
            console.error('Error:', error);
        }

        setPage(2); 
    };


    const [checked, setChecked] = useState(false);
    const handleCheckChange = (event) => {
        setChecked(event.target.checked);
    };

    const pageDisplay = () => {
        if (page === 0) {
            return (<div>

                <MiniInput sectionHeader={'Name'} box1={'First Name'} box2={'Last Name'} type1={'text'} type2={'text'}
                    placeholder1={'First Name'} placeholder2={'Last Name'} value1={formData.first_name} value2={formData.last_name}
                    onchange1={(e) => setFormData({ ...formData, first_name: e.target.value })} onchange2={(e) => setFormData({ ...formData, last_name: e.target.value })} maxlength={30} />

                <SignupInput type={"text"} text={"ex. ahmed01"} label={"Create A Member ID"} value={formData.member_id} onChange={(event) => setFormData({ ...formData, member_id: event.target.value })} required={true} />
                <SignupInput type={"email"} text={"placeholder@gmail.com"} label={"Email"} value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} required={false} />
                <SignupInput type={"tel"} text={"123-456-7890"} label={"Phone Number"} value={formData.phone_number} onChange={(event) => setFormData({ ...formData, phone_number: event.target.value })} required={true} />

                <Dropdown label={'Gender'} op1={'Male'} op2={'Female'} size={'120%'} value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} />
                <Dropdown label={'Would you like to share the info in this page?'} op1={'Share'} op2={"Don't Share"} size={'90%'} value={formData.share_info} onChange={(e) => setFormData({ ...formData, share_info: e.target.value })} />
                <div className="warningContainer">
                    <text className="warningText">Please answer all required questions*</text>
                </div>
            </div>);
        } else if (page === 1) {
            return (
                <div>
                    <AddressLine type={"text"} text={"1511 Cowpath Rd"} label={"Address Line 1"} onChange={(event) => setFormData({ ...formData, address1: event.target.value })} value={formData.address1} required={true} />
                    <AddressLine type={"text"} text={"Secondary Address"} label={"Address Line 2"} onChange={(event) => setFormData({ ...formData, address2: event.target.value })} value={formData.address2} required={false} />

                    <MiniInput sectionHeader={'Additional Address Info'} box1={'City'} box2={'State (Initials)'} type1={'text'} type2={'text'}
                        placeholder1={'Hatfield'} placeholder2={'PA'} third={'true'} box3={'Zip'} type3={'text'} placeholder3={'19440'} value1={formData.city} value2={formData.state}
                        onchange1={(e) => setFormData({ ...formData, city: e.target.value })} onchange2={(e) => setFormData({ ...formData, state: e.target.value })} value3={formData.zip} onchange3={(e) => setFormData({ ...formData, zip: e.target.value })} maxlength={2} />

                    <NumberInput type={"number"} text={"10"} label={"Subscription/Month ($)"} onChange={(event) => setFormData({ ...formData, subscription: event.target.value })} value={formData.subscription} min={10} max={9999} required={true} />

                    <Dropdown label='Would you like us to withdraw money from your account on a monthly basis?' op1='yes' op2='no' size={'100%'} value={formData.auto_withdrawal} onChange={(e) => setFormData({ ...formData, auto_withdrawal: e.target.value })} />
                    <Declaration onchange={handleCheckChange} checked={checked} />
                </div>)
        } else if (page === 2) {
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
                                {page === 1 &&
                                    (<div> <input type="submit" value={"submit"} className="submitButton" disabled={[formData.address1, formData.city, formData.state, formData.zip, formData.subscription, formData.auto_withdrawal].some(field => field === 'nothing' || field === '') || checked === false} /></div>)
                                }
                            </div>
                            {page !== 2 && (
                                <div>
                                    <div>
                                        <button className="nextButton" onClick={() => togglePage()} disabled={page === 1 || [formData.first_name, formData.last_name, formData.phone_number, formData.gender, formData.share_info].some(field => field === 'nothing' || field === '')}> Next </button>
                                    </div>
                                    <div>
                                        <button className="nextButton" onClick={() => togglePage()} style={{ float: "left", marginLeft: 15 }} disabled={page === 0}> Prev </button>
                                        <br /><br /><br /><br /><p style={{ fontSize: 20, color: 'white' }}>.</p> {/* for bottom margin */}
                                    </div>
                                </div>
                            )
                            }
                        </div>
                    </div>
                </form>
            </fieldset>
        </div>
    )
}
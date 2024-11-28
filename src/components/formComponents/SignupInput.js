export default function SignupInput({type, text, label, required, onChange, value}){
   
    return (
        <div className="inputDiv">
        <p className="formLabel">{label} {required && (<span style={{color: 'red'}}>*</span>)} </p>
        <input className="signupInput" type={type} name={label} id={label} placeholder={text} value={value} onChange={onChange} required={required === true}></input> 
        </div>  
         );
}

export function AddressLine({type, text, label, required, onChange, value}){
    return (
        <div className="inputDiv">
        <p className="formLabel">{label} {required && (<span style={{color: 'red'}}>*</span>)} </p>
        <input className="addressline" type={type} name={label} id={label} placeholder={text} value={value} onChange={onChange} required={required === true}></input> 
         </div>  
         );
}

export function NumberInput({type, text, label, required, onChange, value, min, max}){
   
    return (
        <div className="inputDiv">
        <p className="formLabel">{label} {required && (<span style={{color: 'red'}}>*</span>)} </p>
        <input className="signupInput" type={type} name={label} id={label} placeholder={text} value={value} onChange={onChange} min={min} max={max} required={required === true}></input> 
         </div>  
         );
}

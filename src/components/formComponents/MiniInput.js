export default function MiniInput({sectionHeader, box1, box2, type1, type2, placeholder1, placeholder2, third, placeholder3, box3, type3, 
    value1, value2, value3, onchange1, onchange2, onchange3, maxlength}){
    return(
        <div style={{marginBottom: '10%'}}>
            <p className='formLabel' style={{marginBottom: '1%'}}> {sectionHeader} </p> 
            
            <div className="miniinputContainer">
            <label for={box1} className="minilabel">{box1} <span style={{color: 'red'}}>*</span> </label>
            <input className="multi" type={type1} placeholder={placeholder1} name={box1} value={value1} onChange={onchange1} required></input>
            </div>
           
            <div className="miniinputContainer">
            <label for={box2} className="minilabel">{box2}<span style={{color: 'red'}}>*</span></ label>
            <input className="multi" type={type2} placeholder={placeholder2} value={value2} onChange={onchange2} maxLength={maxlength}  required></input>
            </div>
            
            {third && (
                <div className="thirdmultiContainer">
                <label for={box3} className="minilabel"> {box3} <span style={{color: 'red'}}> * </span> </label>
                <input className="multi" type={type3} placeholder={placeholder3} value={value3} onChange={onchange3} required></input>
                </div>
            )} 
        
        </div>

    )
}
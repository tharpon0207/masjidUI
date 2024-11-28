export default function MiniInput({sectionHeader, box1, box2, type1, type2, placeholder1, placeholder2, third, placeholder3, box3, type3, 
    value1, value2, value3, onchange1, onchange2, onchange3, maxlength}){
    return(
        <div style={{marginBottom: '7%'}}>
            <p className='formLabel' style={{marginBottom: '1%'}}> {sectionHeader} </p> 
            
            <div className="doubleContainer">
                <div className="singleContainer">
                <label for={box1} className="miniLabel">{box1} <span style={{color: 'red'}}>*</span> </label>
                <input className="miniInput" type={type1} placeholder={placeholder1} name={box1} value={value1} onChange={onchange1} required></input>
                </div>
            
                <div className="singleContainer">
                <label for={box2} className="miniLabel">{box2}<span style={{color: 'red'}}>*</span></ label>
                <input className="miniInput" type={type2} placeholder={placeholder2} value={value2} onChange={onchange2} maxLength={maxlength}  required></input>
                </div>
            </div>
            
            {third && (
                <div className="thirdContainer">
                <label for={box3} className="miniLabel"> {box3} <span style={{color: 'red'}}> * </span> </label>
                <input className="miniInput" type={type3} placeholder={placeholder3} value={value3} onChange={onchange3} required></input>
                </div>
            )} 
        
        </div>

    )
}
import '../../App.css';

export default function Withdrawal({label, op1, op2, size, onChange, value}){
    return(
        <div style={{textAlign: "center"}}>
            <div style={{textAlign: 'center'}} className='dropdownLabel'>
                <p className='dropdownLabel' style={{fontSize: {size}}}>{label} <span style={{color: 'red'}}>*</span></p>
            </div>
            <div style={{textAlign: 'center'}}>
                <select id='withdrawal' name='withdrawal' className='dropdown' value={value} onChange={onChange} required>
                    <option value={'nothing'}> Select </option>
                    <option value={op1}> {op1} </option>
                    <option value={op2}> {op2} </option>
                </select>
            </div>  
        </div>)
}
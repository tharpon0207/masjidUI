import '../../App.css';

export default function Declaration({onchange, checked}){

    return (
        <div className='declarationdiv'>
            <p className='declarationtext'>By submitting this form I do hereby swear to abide by the Constitution of the Mosque and shall not express or take any action that may damage the aims and objectives of the Mosque.</p>
            <br />
            
            <div className='checkboxContainer'>
                <label className='agreeLabel'>
                <input type='checkbox' name='agree' value={'agree'} className='declarationcheckbox' onChange={onchange} checked={checked}></input>
               <pre> </pre> Agree </label>
            </div>

        </div>
      );
}
 
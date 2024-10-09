import '../App.css';
import Welcome from '../components/formComponents/Welcome.js';
import Form from '../components/Form.js';

export default function FormPage() {

  return (
    <div className='parentContainer'>
      <Welcome />
      <div>
        <Form />
      </div>
      <div className='bottom'>
        <address>
          <ol style={{listStyle: 'none'}}>
          <li className='closingText'>Hatfield Jame Masjid</li>
          <li><a className='closingText' href='mailto: hatfieldjamemasjid@yahoo.com' rel='noreferrer' target='_blank'>hatfieldjamemasjid@yahoo.com</a></li>
          <li><a className='closingText' href='#+1 215-362-5771' rel='noreferrer' target='_blank'>+1 215-362-5771</a></li>
          <li><a className='closingText' href='https://www.google.com/maps/place/Hatfield+Jame+Masjid/@40.272614,-75.2894718,17z/data=!4m5!3m4!1s0x89c6a1a0d492c06d:0x60a34f41cf940c5e!8m2!3d40.2725839!4d-75.2873132?shorturl=1' rel='noreferrer' target='_blank'>1511 Cowpath Rd, Hatfield, PA 19440</a></li>
          </ol>
        </address>
      </div>
  </div>
  );
}


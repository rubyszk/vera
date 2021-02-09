import whitelogo from '../images/white-logo.png';

const Form = () => {
  return (
    <div className="form-page">
      <h3 className="form-header"> 
        We envision 
        <br/> a society 
        <br/>that respects 
        <br/> the dignity 
        <br/> of every 
        <br/> person and 
        <br/> safeguards justice 
        <br/> for everyone.   
        <br/>   
        <img className="footer-logo"src={whitelogo}/>
      </h3>
      <div className="form">
      <h3 className="italic"> Join us in the fight against qualified immunity.</h3>
      <div className="form-input">
            <input className="input"type="text" name="First Name" placeholder="First Name*"/>
            <br/> <input className="input"type="text" name="Last Name" placeholder="Last Name*"/>
            <br/> <input className="input"type="text" name="Email" placeholder="Email*"/>
            <br/> <input className="input"type="text" name="Zip Code" placeholder="Zip Code"/>
            <br/> <input className="checkbox" type="checkbox"/>
            <label> I have read and agree to the Privacy Policy. </label>
            <br/> <input className="checkbox" type="checkbox"/>
            <label> I would like to recieve emails from Vera. </label>
            <br/> <button>Sign Up</button>
          </div>
      </div>

    </div>
  )
}

export default Form;
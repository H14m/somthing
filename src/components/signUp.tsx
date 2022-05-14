import React from 'react';
import ReactDOM from 'react-dom';
import "../style/signup.css"
class signUp extends React.Component {
    render() {
       return( 
        <body>
            <div className="model">
<form className='modal-content'>
<div className="container">
 <h1>Sign Up</h1>
    <p>Please fill in this form to create an account.</p>

  <label>
    Name:
    <input type="text" name="name" placeholder="Enter Username"  required/>  </label>
  <label>
    Email:
    <input type="email" placeholder="Enter Email" name="email" required />
  </label>
  <label>
    Password:
    <input type="password" placeholder="Enter Password" name="psw" required />
  </label>
  <label>
  Repeat Password:
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required />
      </label>
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
      <div id="clearfix">
      <input type="submit" className="signupbtn" value="Sign Up" />
      <input type="submit" className="cancelbtn" value="Cancel" />

  </div>

  </div>
  </form>
  </div>
  </body>
);
}
}




export default signUp;
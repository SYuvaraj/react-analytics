import React, { useState } from 'react';
import { ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import '../Login/Login';
import { withRouter } from 'react-router-dom';


const Modal = (props) => {
  //signup state
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDOB] = useState("");
  const [mobile, setMobile] = useState("");
  const [regpassword, setRegPassword] = useState("");
  const [confirmregpassword, setconfrimRegPassword] = useState("");

  const handleSignUp = (event) => {
    event.preventDefault();
    const userDetails = { fname, lname, email, dob, mobile, regpassword,  confirmregpassword};
    // store the user in localStorage
    localStorage.setItem('user', JSON.stringify(userDetails));
    if( localStorage.getItem('user') && localStorage.getItem('user') !== null){
      props.history.push('/dashboard');
    }
  }
if (props.isShowing){
return(
  <React.Fragment>
    <div className="umodal-overlay"/>
    <div className="umodal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="umodal">
        <div className="umodal-header">
          <button type="button" className="umodal-close-button" data-dismiss="modal" aria-label="Close" onClick = { props.hide }>
            <span aria-hidden="true">&times;</span>
          </button> 
        </div>
        <div className = "signup">
        <form onSubmit={handleSignUp}>
          <ModalHeader>SIGN UP</ModalHeader>
          <ModalBody>
          <div className="row">
            <div className="form-group">
            <label>First Name:</label>
            <input type="text" value = {fname} onChange = {(event) => setFName(event.target.value)} className="form-control" />
              </div>
          </div>
            <div className="row">
             <div className="form-group">
            <label>Last Name:</label>
                <input type="text" value = {lname}  onChange = {(event) => setLName(event.target.value)} className="form-control" />
               </div>
              </div>
              <div className="row">
              <div className="form-group">
             <label>Email:</label>
                 <input type="text" value = {email}  onChange = {(event) => setEmail(event.target.value)} className="form-control" />
                </div>
               </div>
              <div className="row">
             <div className="form-group">
            <label>Date of Birth:</label>
                <input type="text" value = {dob} onChange = {(event) => setDOB(event.target.value)} className="form-control" />
               </div>
              </div>
              <div className="row">
             <div className="form-group">
            <label>Mobile:</label>
                <input type="text"  value = {mobile} onChange = {(event) => setMobile(event.target.value)} className="form-control" />
               </div>
              </div>
            <div className="row">
             <div className="form-group">
              <label>Password:</label>
                <input type="password" value = {regpassword}  onChange = {(event) => setRegPassword(event.target.value)} className="form-control" />
               </div>
              </div>
              <div className="row">
             <div className="form-group">
              <label>Confirm Password:</label>
                <input type="password"  value = {confirmregpassword} onChange = {(event) => setconfrimRegPassword(event.target.value)} className="form-control" />
               </div>
              </div>
          </ModalBody>
          <ModalFooter>
            <input type="submit" value="Submit" color="primary" className="signupbtn" />
          </ModalFooter>
          </form>
 
        </div>
      </div>
    </div>
    </React.Fragment>
)}else{
  return null;
}
}

export default withRouter(Modal);
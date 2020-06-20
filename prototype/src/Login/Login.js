import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from '../../node_modules/reactstrap';
import { withRouter } from 'react-router-dom';
import './Login.css';
import Modal from "../Modal/Modal";
import useModal from '../Modal/useModal';

const Login = (props) => {
    const {isShowing, toggle} = useModal();
    //login states
    const [emailaddress, setEmail] = useState(null);
    const [currentpassword, setPassword] = useState(null);
    const [emailError, setEmailError] = useState(null);
    const [passwordError, setPasswordError] = useState(null);
    const [invalidCredentials, setInvalidCredentials] = useState(null);
    const [setUser, setUserNull] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        let user = JSON.parse(localStorage.getItem('user'));
        
        if(user !== null && user !== undefined ){
            let { email, regpassword} = user;
            if(emailaddress === null){
                setEmailError('Email cannot be blank')
            }
            if(currentpassword === null){
                setPasswordError('Password cannot be blank')
            }
            if( emailaddress !== null && emailaddress !== email && currentpassword !== null && currentpassword !== regpassword){
                setInvalidCredentials('Invalid Credentials');
            }
            if( emailaddress === email && regpassword === currentpassword && user !== null){
                props.history.push('/dashboard');
            }
        }else{
            setUserNull('No Records Found!!! Please Sign Up')
        }                
    }
    return (
        <div className="Login">
            <div className="signinlabel">Sign In</div>
            <Form>
                <FormGroup onSubmit={handleSubmit}>
                    <Label for="email" className = "label">Email address</Label>
                    <Input
                        id="email"
                        type="email"
                        className="input"
                        name="email"
                        placeholder="Enter email"
                        onChange={e => setEmail(e.target.value)} />
                </FormGroup>
                {emailError && <p className="error">{emailError}</p> }
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        className="input"
                        name="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)} />
                </FormGroup>
                { passwordError && <p className="error">{passwordError}</p> }
                {invalidCredentials &&  <p className="error">{invalidCredentials}</p>}
                <Button className="signin" onClick={handleSubmit}>SIGN IN</Button>
                <p>Don't have an accout? <span className = 'signuptxt' onClick= {toggle} >Sign Up</span></p>
                {setUser && <p className="setuser">{setUser}</p>}
            </Form>
            <Modal
            isShowing={isShowing} 
            hide = {toggle}
             />
        </div>
    );
}

export default withRouter(Login);
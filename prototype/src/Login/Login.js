import React, {useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from '../../node_modules/reactstrap';
import {Route,withRouter} from 'react-router-dom';
import './Login.css';

const Login = (props) => {
    console.log('props',props)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
      }
    
    function handleSubmit(event) {
        event.preventDefault();
        if ( email == "s.yuvaraj03@gmail.com" && password == "1234"){
            props.history.push('/dashboard');
        }
    }
    
    return (
        <div className="Login">
            <div className="signinlabel">Sign In</div>
            <Form>
                <FormGroup onSubmit={handleSubmit}>
                    <Input type="email" 
                    name="email" 
                    id="exampleEmail" 
                    placeholder="Email" 
                    onChange={e => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Input type="password"
                     name="password" id="examplePassword" 
                     placeholder="password" 
                     onChange={e => setPassword(e.target.value)}/>                    
                </FormGroup>
                <Button className="signin" onClick = {handleSubmit}>SIGN IN</Button>
            </Form>
        </div>
    );
}

export default withRouter(Login);
import React, { useState } from 'react';
import BarChart from '../BarChart/BarChart';
import LineChart from '../LineChart/LineChart';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';


const Dashboard = (props) =>{
    const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);

    const handleClick = () => {
        props.history.push('/');
    }    

    let firstName, lastName;
    if( JSON.parse(localStorage.getItem('user')) !== null){
        let {fname, lname}  = JSON.parse(localStorage.getItem('user'));
        firstName = fname;
        lastName = lname;
    } 
    

    const handleUpdate = () => {        
        let datalength = data.length;
        if ( data[datalength - 1] <= 140  ){
            setData(data.map(value => value + 5))
        }
    }
    
    return(        
        <Container fluid>
        <Row>
            <Col className = "dashboard" md="12">  
                Dashboard
                <div className = "userdetails">
                    <div className = "user">Welcome {firstName +' '+ lastName}</div>
                    <div className = "logout" onClick = {handleClick} >LOG OUT</div>
                </div>
               
            </Col>
            <Col md="6"><BarChart handleUpdateData = {data} handleFilterData = {data}/></Col>
            <Col md="6"><LineChart handleUpdateData = {data} handleFilterData = {data} /></Col>        
        </Row>
        <Row>
            <Col md="12 text-center">
                <button className = "actionbtn"  onClick = {handleUpdate} >Update data</button>
                <button className = "actionbtn" onClick = {() => setData(data.filter(value => value <= 100))}>Filter data
                </button>
            </Col>
            
        </Row>
    </Container>
    );
}

export default withRouter(Dashboard);
import React, { useState } from 'react';
import BarChart from '../BarChart/BarChart';
import LineChart from '../LineChart/LineChart';
import './Dashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap/dist/react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import StackedBarChart from '../stackedBarChart/stackedBarChart';


const Dashboard = (props) =>{
    const [data, setData] = useState([25, 30, 45, 60, 10, 65, 75]);
    const stackdata = [
        {
          year: 1980,
          "ProductA": 10,
          "ProductB": 20,
          "ProductC": 30
        },
        {
          year: 1990,
          "ProductA": 20,
          "ProductB": 40,
          "ProductC": 60
        },
        {
          year: 2000,
          "ProductA": 30,
          "ProductB": 45,
          "ProductC": 80
        },
        {
          year: 2010,
          "ProductA": 40,
          "ProductB": 60,
          "ProductC": 100
        },
        {
          year: 2020,
          "ProductA": 50,
          "ProductB": 80,
          "ProductC": 120
        }
      ];
    
      const allKeys = ["ProductA", "ProductB", "ProductC"];
      const colors = {
          "ProductA": "green",
          "ProductB": "orange",
          "ProductC": "purple"
        };
        
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
   
      
    const [keys, setKeys] = useState(allKeys);
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
        <Row>
            <div className="stackbarchart">
                <p><b>Stacked Bar chart</b></p>
                <Col md="6"><StackedBarChart data = {stackdata} keys = {keys} colors = {colors} /></Col>        
            </div>
        </Row>

        <div className="fields">
            { allKeys.map( key => (
            <div key={key} className="field">
                <input
                id={key}
                type="checkbox"
                checked={keys.includes(key)}
                onChange={e => {
                    if (e.target.checked) {
                    setKeys(Array.from(new Set([...keys, key])));
                    } else {
                    setKeys(keys.filter(_key => _key !== key));
                    }
                }}
                />
                <label htmlFor={key} style={{ color: colors[key] }}>
                {key}
                </label>
          </div>
        ))}
    </div>
    </Container>
    );
}

export default withRouter(Dashboard);
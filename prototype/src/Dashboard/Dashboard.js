import React from 'react';
import Button from 'reactstrap/lib/Button';
import BarChart from '../BarChart/BarChart';
import './Dashboard.css';

const Dashboard = (props) =>{
    const goBack = () => {
        props.history.goBack();
    }
    return(
        <div>  
            
            <div className="dashhead">
                <h2>Dashboard</h2>  
                <Button className = "signout" onClick={goBack}> Log Out</Button>
            </div>                                         
            <BarChart />
        </div>
    );
}

export default Dashboard;
import React, { useState, useEffect } from 'react';
import Button from 'reactstrap/lib/Button';
import BarChart from '../BarChart/BarChart';
import './Dashboard.css';
import * as d3 from '../../node_modules/d3/dist/d3';

const datas = [
    [10, 30, 40, 20],
    [10, 40, 30, 20, 50, 10],
    [60, 30, 40, 20, 30]
]

var i = 0;

const Dashboard = (props) =>{
    const goBack = () => {
        props.history.goBack();
    }
    const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, []);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }

    return(
        <div>  
            <div className="dashhead">
                <h2>Dashboard</h2>  
                <div className = "signout" onClick={goBack}> Log Out</div>
            </div>                                                   
            <h2>Graphs with React</h2>
            <button onClick={changeData}>Change Data</button>
            <BarChart width={600} height={400} data={data} />
        </div>
    );
}

export default Dashboard;
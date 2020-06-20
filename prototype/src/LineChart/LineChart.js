import React, { useRef, useEffect } from 'react';	
import { 
    select, 
    line, 
    curveCardinal, 
    axisBottom, 
    axisRight,
    scaleLinear } from 'd3';
import { Container, Row, Col } from 'reactstrap';
import '../BarChart/BarChart.css';
import { withRouter } from "react-router-dom";

function LineChart(props){

    let dataset;
	if( props.handleFilterData.length > 0 ){
		 dataset = props.handleFilterData || props.handleUpdateData;
    }	

	const svgRef = useRef();
    
    // will be called initially and on every data change
	useEffect(() => {
        const svg  =  select(svgRef.current);

        //xscale
        const xScale = scaleLinear()
            .domain([0, dataset.length - 1])
            .range([0, 300]);
        
        const xAxis = 
            axisBottom(xScale)
            .ticks(dataset.length)
            .tickFormat(index => index + 1);
            svg
            .select(".x-axis")
            .style("transform", "translateY(150px)")
            .call(xAxis);
        
        //yscale
        const yScale = scaleLinear()
        .domain([0, 150])
        .range([150, 0]);

        const yAxis = axisRight(yScale);
        svg
        .select(".y-axis")
        .style("transform", "translateX(300px)")
        .call(yAxis);

        //generate the 'd' attribute of a path element
        const myLine = 
            line()
            .x((value, index) => xScale(index))
            .y(yScale)
            .curve(curveCardinal);

        // renders path element, and attaches
        // the "d" attribute from line generator above
        svg
        .selectAll(".line")
        .data([dataset])
        .join("path")
        .attr("class","line")
        .attr("d", myLine)
        .attr("fill", "none")
        .attr("stroke", "blue");
    }, [dataset])
    
    return (
        <React.Fragment>
        <Container fluid>
        <Row>
            <Col>  
                <p><b>Line Chart</b></p>
                <svg ref={svgRef}>
                    <g className = "x-axis" />
                    <g className = "y-axis" />
                </svg>
                <br/>
                <br/>
                <br/>
                <br/>           
            </Col>
        </Row>
        </Container>
        </React.Fragment>
      
    )
}

export default withRouter(LineChart);
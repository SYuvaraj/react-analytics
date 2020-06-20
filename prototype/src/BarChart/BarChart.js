import React, { useRef, useEffect } from 'react';	
import { Container, Row, Col } from 'reactstrap';
import { 
    select, 
    axisBottom, 
    axisRight,
	scaleLinear,
	scaleBand
 } from 'd3';
import './BarChart.css';
import { withRouter } from "react-router-dom";



function BarChart(props){

	let dataset;
	if( props.handleFilterData.length > 0 ){
		 dataset = props.handleFilterData || props.handleUpdateData;
	}	
	const svgRef = useRef();
	useEffect(() => {
		const svg = select(svgRef.current);
    // scales
    const xScale = scaleBand()
      .domain(dataset.map((value, index) => index))
      .range([0, 300])
      .padding(0.5);

    const yScale = scaleLinear()
      .domain([0, 150])
      .range([150, 0]);

    const colorScale = scaleLinear()
      .domain([75, 100, 150])
      .range(["green", "orange", "red"])
      .clamp(true);

    // create x-axis
    const xAxis = axisBottom(xScale).ticks(dataset.length);
    svg
      .select(".x-axis")
      .style("transform", "translateY(150px)")
      .call(xAxis);

    // create y-axis
    const yAxis = axisRight(yScale);
    svg
      .select(".y-axis")
      .style("transform", "translateX(300px)")
      .call(yAxis);

    // draw the bars
    svg
      .selectAll(".bar")
      .data(dataset)
      .join("rect")
      .attr("class", "bar")
      .style("transform", "scale(1, -1)")
      .attr("x", (value, index) => xScale(index))
      .attr("y", -150)
      .attr("width", xScale.bandwidth())
      .on("mouseenter", (value, index) => {
        svg
          .selectAll(".tooltip")
          .data([value])
          .join(enter => enter.append("text").attr("y", yScale(value) - 4))
          .attr("class", "tooltip")
          .text(value)
          .attr("x", xScale(index) + xScale.bandwidth() / 2)
          .attr("text-anchor", "middle")
          .transition()
          .attr("y", yScale(value) - 8)
          .attr("opacity", 1);
      })
      .on("mouseleave", () => svg.select(".tooltip").remove())
      .transition()
      .attr("fill", colorScale)
      .attr("height", value => 150 - yScale(value));

	}, [dataset])
    return (
		<Container fluid>
			<Row>
				<Col>
					<p><b>Bar Chart</b></p>
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
       
    )
}

export default withRouter(BarChart);
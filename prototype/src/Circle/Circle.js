import * as d3 from 'd3';
import React, { useRef, useEffect, useState } from 'react';	
import {select} from 'd3';
function BarChart(){
    // const ref = useRef();

    // useEffect(() => {
    //     const svg = d3.select(ref.current)
    //         .attr("width", width)
    //         .attr("height", height)
    //         .style("border", "1px solid black")
    // }, []);

    // useEffect(() => {
    //     draw();
    // }, [data]);

    // const draw = () => {
        
    //     const svg = d3.select(ref.current);
    //     var selection = svg.selectAll("rect").data(data);
    //     var yScale = d3.scaleLinear()
    //                         .domain([0, d3.max(data)])
    //                         .range([0, height-100]);
        
    //     selection
    //         .transition().duration(300)
    //             .attr("height", (d) => yScale(d))
    //             .attr("y", (d) => height - yScale(d))

    //     selection
    //         .enter()
    //         .append("rect")
    //         .attr("x", (d, i) => i * 45)
    //         .attr("y", (d) => height)
    //         .attr("width", 40)
    //         .attr("height", 0)
    //         .attr("fill", "orange")
    //         .transition().duration(300)
    //             .attr("height", (d) => yScale(d))
    //             .attr("y", (d) => height - yScale(d))
        
    //     selection
    //         .exit()
    //         .transition().duration(300)
    //             .attr("y", (d) => height)
    //             .attr("height", 0)
    //         .remove()
	// }
	
	const [data, setData] = useState([25, 30,  45, 60, 20]);
	const svgRef = useRef();
	console.log("ref1",svgRef);
	
	useEffect( ()=>{
		const svg  =  select(svgRef.current);
		svg
			.selectAll("circle")
			.data(data)
			.join("circle")
			.attr("r", value => value)
				.attr("cx", value => value * 2)
				.attr("cy", value => value * 2)
				.attr("stroke","red");
	}, [data])
    return (
        <div className="chart">
			<div id='layout'>
				 <h2>Bar chart example</h2> 
				 <div id='container'>
				 	<svg ref={svgRef}></svg>
					 <button onClick = {() => setData(data.map(value => value + 5))}>Update data
					 </button>
					 <button onClick = {() => setData(data.filter(value => value <= 35))}>Filter data
					 </button>

			 </div>
			</div>
	  	</div>
    )
}

export default BarChart;
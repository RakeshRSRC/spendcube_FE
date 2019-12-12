import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/js_lib/canvasjs.react'

let CanvasJSChart = CanvasJSReact.CanvasJSChart;
let CanvasJS = CanvasJSReact.CanvasJS;

class BarChart extends Component {
	
    constructor(props) {
        super(props);
        this.state = {};
	}
	
	addSymbols(e) {
		var suffixes = ["", "K", "M", "B"];
		var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
		if (order > suffixes.length - 1)
			order = suffixes.length - 1;
		var suffix = suffixes[order];
		return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
	}
	render() {
		const options = {
			animationEnabled: true,
			theme: this.props.theme,
			title: {
				text: "Most Popular Social Networking Sites"
			},
			axisX: {
				title: "Social Network",
				reversed: true,
			},
			axisY: {
				title: "Monthly Active Users",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "column",
				dataPoints: [
					{ y: 2200000000, label: "Facebook" },
					{ y: 1800000000, label: "YouTube" },
					{ y: 800000000, label: "Instagram" },
					{ y: 563000000, label: "Qzone" },
					{ y: 376000000, label: "Weibo" },
					{ y: 336000000, label: "Twitter" },
					{ y: 330000000, label: "Reddit" }
				]
			}]
		}

		return (
			<div>
				<CanvasJSChart options={options}
				/* onRef={ref => this.chart = ref} */
				/>
				{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
			</div>
		);
	}
}

export default BarChart;
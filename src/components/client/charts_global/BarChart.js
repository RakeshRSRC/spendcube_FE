import { Column } from '@antv/g2plot';

// source URL :  https://g2plot.antv.vision/zh/examples/column/basic

export default function createSingleChart(id, title, data) {
	const columnPlot = new Column(document.getElementById(id), {
		title: {
			visible: true,
			text: title,
		},
		// forceFit: true,
		data,
		padding: 'auto',
		width: 500,
		height: 300,
		xField: 'label',
		yField: 'value',
		meta: {
			label: {
				alias: 'Vendor',
			},
			value: {
				alias: title,
			},
		},
	});

	columnPlot.render();
}

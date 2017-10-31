google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);

var options = {
	timeline: { 
		groupByRowLabel: true,
		rowLabelStyle: {fontName: 'Roboto, sans-serif', fontSize: 14 },
        barLabelStyle: {fontName: 'Roboto, sans-serif', fontSize: 14 } 
	},
	tooltip: { isHtml: true },
	colorByRowLabel: true,
	backgroundColor: '#fff',
	colors: ['#db3236', '#f4c20d', '#3cba54'], //sets the colors in a row
}

function drawChart() {
	var description = {
		'Bachelors':'<h4>B.S. Mechanical Engineer</h4><p>San Jose State University</p>',
		'Minor':'<h4>Minor: Business</h4><p>San Jose State University</p>',

		'Project Engineer':'<h4>Chicago Bridge &amp Iron</h4><h4>Project Engineer and Coordinator</h4><p>Customer Success</p><p>On-Site project management</p><p>System design, commissioning, troubleshooting, and operations of treatment systems</p><p>Testing and troubleshooting of logic controllers and control systems</p>',

		'Chlorinated2':'<h4>Battelle Chlorinated Conference</h4><p>Cogeneration of Landfill gas</p>',
		'Chlorinated1':'<h4>Battelle Chlorinated Conference</h4><p>Electrical Resistance Heating</p>',
	}

	var data = new google.visualization.DataTable();
		
	data.addColumn({ type: 'string', id: 'Position' });
    data.addColumn({ type: 'string', id: 'Event' });
    data.addColumn({ type: 'string', role: 'tooltip', 'p': {'html': true }});
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });

	data.addRows([
		['Education','Bachelor\'s Degree', description['Bachelors'], new Date(2001, 8, 1), new Date(2007, 5, 1)],
		['Education','Minor', description['Minor'], new Date(2001, 8, 1), new Date(2007, 5, 1)],

		['Experience', 'Project Engineer', description['Project Engineer'], new Date(2006, 5, 1), new Date(2015, 8, 1)],

		['Additional Info', 'Chlorinated Conference', description['Chlorinated2'], new Date(2010, 5, 24), new Date(2010, 5, 27)],
		['Additional Info', 'Chlorinated Conference', description['Chlorinated1'], new Date(2008, 5, 19), new Date(2008, 5, 22)],
	]);

	var container = document.getElementById('timeline1');
    var chart = new google.visualization.Timeline(container);

	chart.draw(data, options);
}
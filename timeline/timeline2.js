google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	var description = {
		'Masters':'<h4>M.S. Computer Science</h4><p>San Jose State University</p><p>GPA 3.5</p>',

		'AoG':'<h4>Accenture at Google</h4><h4>Global Operations Lead</h4><p><a href="https://developers.google.com/actions/">Actions on Google</a></p>',
		'Insight':'<h4>Insight Global</h4><h4>GPOM Validation Engineering Supervisor</h4><p>Compliance of Gas Pipeline Operations and Maintenance</p>',
		'Assistant':'<h4>Topics in Wireless Mobile Networking</h4><h4>Teacher\'s Assistant</h4><h4>San Jose State University</h4><p>Docker, Nutanix Cloud, Slack, VirtualBox, Mininet, OpenDayLight, NS3</p>',
		'Intern':'<h4>Findlaw</h4><h4>Software Intern</h4><p>Project coordinating</p><p>Migration of web content to Adobe CQ 5.6.1</p><p>Development of web page and components</p><p>Redirection of Legacy Domains</p>',
		'Engineer':'<h4>Chicago Bridge &amp Iron</h4><h4>Project Engineer and Coordinator</h4><p>Customer Success</p><p>On-Site project management</p><p>System design, commissioning, troubleshooting, and operations of treatment systems</p><p>Testing and troubleshooting of logic controllers and control systems</p>',

		'ChemConvert':'<h4>ChemConvert</h4><p>A conversion tool for chemical compounds<p/><p>React, ESlint, Webpack, Sass</p>',
		'IntTips':'<h4>IntTips</h4><p>A simple tip calculator that ceiling rounds to the next integer value<p/><p>express, node, html, css, javascript, jquery</p>',
		'Currency':'<h4>Currency Exchange</h4><p>A currency exchange rate calculator<p/><p>express, node, html, css, sass, javascript, jquery, gulp, minification, browsersync, typescript</p>',
		'Park':'<h4>Park Information</h4><p>A list of group picnic areas in the Tri-Valley<p/><p>Tomcat, apache, html, css, javascript, jquery, jsp, servlet, ajax, mysql</p>',
		'SignUp':'<h4>Sign Up Sheet</h4><p>A simple sign up sheet for a group of users with no admin<p/><p>Docker, apache, html, css, javascript, jquery, php, ajax, mysql</p>',

		'Simple':'<h4>Aeris IoT Workshop</h4><h4>Simple Bottle</h4><p>1st Place</p><p>Simple pill bottle to prevent prescription drug abuse</p>',

		'Node':'<h4>Node Summit</h4><p>Volunteer</p><p>San Francisco, CA</p>',
		'Structure':'<h4>Structure Conference</h4><p>Volunteer</p><p>San Francisco, CA</p>',

		'timeline':'<h4>Timeline</h4><p>This timeline</p>',
		'treemap':'<h4>TreeMap</h4><p>TreeMap of my Resume</p>',
	}

	var today = new Date();
	var data = new google.visualization.DataTable();
		
	data.addColumn({ type: 'string', id: 'Position' });
    data.addColumn({ type: 'string', id: 'Event' });
    data.addColumn({ type: 'string', role: 'tooltip', 'p': {'html': true }});
    data.addColumn({ type: 'date', id: 'Start' });
    data.addColumn({ type: 'date', id: 'End' });

	data.addRows([
		['Education','Master\'s Degree', description['Masters'], new Date(2014, 1, 1), new Date(2017, 5, 1)],

		['Experience', 'Global Operations Lead', description['AoG'], new Date(2018, 2, 21), new Date(today.getFullYear(), today.getMonth()+1, today.getDate())],
		['Experience', 'Validation Engineer', description['Insight'], new Date(2017, 11, 1), new Date(2018, 2, 16],
		['Experience', 'Teaching Assistant', description['Assistant'], new Date(2017, 1, 1), new Date(2017, 5, 1)],
		['Experience', 'Software Intern', description['Intern'], new Date(2015, 8, 1), new Date(2016, 8, 4)],
		['Experience', 'Project Engineer', description['Engineer'], new Date(2014, 1, 1), new Date(2015, 8, 1)],

		['Additional Info', 'ChemConvert', description['ChemConvert'], new Date(2017, 10, 1), new Date(2017, 11, 18)],
		['Additional Info', 'IntTips', description['IntTips'], new Date(2017, 8, 1), new Date(2017, 8, 30)],
		['Additional Info', 'Currency Exchange', description['Currency'], new Date(2017, 9, 1), new Date(2017, 9, 30)],
		['Additional Info', 'Park Information', description['Park'], new Date(2017, 7, 1), new Date(2017, 7, 30)],
		['Additional Info', 'Sign Up Sheet', description['SignUp'], new Date(2017, 6, 1), new Date(2017, 6, 30)],
		['Additional Info', 'Simple Bottle', description['Simple'], new Date(2016, 3, 19), new Date(2016, 4, 2)],
		['Additional Info', 'Node Summit', description['Node'], new Date(2016, 7, 26), new Date(2016, 7, 28)],
		['Additional Info', 'Structure Conference', description['Structure'], new Date(2016, 11, 8), new Date(2016, 11, 9)],
		['Additional Info', 'Timeline', description['timeline'], new Date(2017, 10, 21), new Date(2017, 10, 30)],
		['Additional Info', 'TreeMap', description['treemap'], new Date(2017, 10, 2), new Date(2017, 10, 20)],
	]);

	var container = document.getElementById('timeline2');
    var chart = new google.visualization.Timeline(container);

	chart.draw(data, options);

}
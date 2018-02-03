google.charts.load('current', {'packages':['treemap']});
google.charts.setOnLoadCallback(drawChart);

var description = {
	'Resume':'',

	'Links':'LinkedIn, GitHub',
	'Contact Info':'Email',
	'Education':'Masters, Bachelors, Minor',
	'Experience':'Work Experience',
	'Side Projects':'Personal Projects',
	'Additional Info':'Links, Contact, Volunteering, Other',

	'LinkedIn':'<a href="https://www.linkedin.com/in/nathanwkong">LinkedIn</a>',
	'GitHub':'<a href="https://github.com/natekong">GitHub</a>',

	'Email':'<a href="mailto:Natewkong@gmail.com">Natewkong@gmail.com</a>',

	'Masters':'<p>M.S. Computer Science</p><p>San Jose State University</p><p>GPA 3.5</p>',
	'Bachelors':'<p>B.S. Mechanical Engineer</p><p>San Jose State University</p>',
	'Minor':'Business',

	'Validation Engineering Supervisor':'<p>Compliance of Gas Pipeline Operations and Maintenance</p></p>',
	'Teaching Assistant':'<p>Topics in Wireless Mobile Networking</p><p>San Jose State University</p>',
	'Software Intern':'<p>Findlaw</p><p>Project coordinating</p><p>Migration of web content to Adobe CQ 5.6.1</p><p>Development of web page and components</p><p>Redirection of Legacy Domains</p>',
	'Project Engineer':'<p>Project coordination</p><p>Customer Success</p><p>On-Site project management</p><p>System design, commissioning, troubleshooting, and operations of treatment systems</p><p>Testing and troubleshooting of logic controllers and control systems</p>',

	'ChemConvert':'<p>A conversion tool for chemical compounds<p/><p>React, ESlint, Webpack, Sass</p><a href="http://natekong.ddns.net/node/chemConvert/">chemConvert</a>',
	'IntTips':'<p>A simple tip calculator that ceiling rounds to the next integer value<p/><p>express, node, html, css, javascript, jquery</p><a href="http://natekong.ddns.net/node/intTip/">intTips</a>',
	'Currency Exchange':'<p>A currency exchange rate calculator<p/><p>express, node, html, css, sass, javascript, jquery, gulp, minification, browsersync, typescript</p><a href="http://natekong.ddns.net/node/exchange/">Exchange</a>',
	'Park Information':'<p>A list of group picnic areas in the Tri-Valley<p/><p>Tomcat, apache, html, css, javascript, jquery, jsp, servlet, ajax, mysql</p><a href="http://natekong.ddns.net/tomcat/Tri-Valley-Parks/">Parks</a>',
	'Sign Up Sheet':'<p>A simple sign up sheet for a group of users with no admin<p/><p>Docker, apache, html, css, javascript, jquery, php, ajax, mysql</p><a href="http://natekong.ddns.net/snowboard/">Sign up</a>',

	'Simple Bottle':'<p>1st Place - Aeris 2016 IoT Workshop</p><p>Simple pill bottle to prevent prescription drug abuse</p>',
	'Volunteering':'',

	'Node Summit':'July 2016',
	'Structure Conference':'November 2016',
}

function drawChart() {

	var data = new google.visualization.DataTable();
		data.addColumn('string', 'Topic');
		data.addColumn('string', 'Parent');
		data.addColumn('number', 'Size');
		data.addColumn('number', 'Color');

		data.addRows([
			['Resume',null,1,1],
			['Education','Resume',1,4],
			['Experience','Resume',1,0],
			['Side Projects','Resume',1,8],
			['Additional Info','Resume',1,10],

			['Masters','Education',5,10],
			['Bachelors','Education',4,4],
			['Minor','Education',1,8],

			['Validation Engineering Supervisor','Experience',4,6],
			['Teaching Assistant','Experience',2,4],
			['Software Intern','Experience',7,0],
			['Project Engineer','Experience',5,2],

			['ChemConvert','Side Projects',1,5],
			['IntTips','Side Projects',1,4],
			['Currency Exchange','Side Projects',1,0],
			['Park Information','Side Projects',1,2],
			['Sign Up Sheet','Side Projects',1,6],

			['Simple Bottle','Additional Info',1,3],
			['Volunteering','Additional Info',0,0],
			['Links','Additional Info',1,6],
			['Contact Info','Additional Info',1,1],
			
			['Node Summit','Volunteering',1,6],
			['Structure Conference','Volunteering',1,10],

			['LinkedIn','Links',5,3],
			['GitHub','Links',3,0],
			
			['Email','Contact Info',1,9],
			
		]);

	var tree = new google.visualization.TreeMap(document.getElementById('treemap'));

	var options = {
		title: 'NATHAN KONG',
		minColor: '#8bc34a',
		midColor: '#ffeb3b',
		maxColor: '#ffa726',
		headerHeight: 50,
		headerColor:'#2196f3',
		fontColor: 'black',
		showScale: false,
		highlightOnMouseOver: false,
		generateTooltip: tooltip,
		fontColor: '#000',
		fontSize: 24,
		fontFamily: 'Roboto, sans-serif'
	}

	function tooltip(row, size, value) {
		var title = data.getValue(row, 0);
    	return '<div style="background:#80cbc4; padding:10px; border:solid 1px; font-family: Roboto, sans-serif;">'
    		+ '<div style="font-size: 16px;">' + title + '</div>'
    		+ '<div style="font-size: 12px;">' + description[title] + '</div>'
    		+ '</div>';
  	}

	tree.draw(data, options);

}
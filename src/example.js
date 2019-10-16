import _ from 'lodash';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';


  var data = [
    {
		"title":"event 1", 
		"date":"2019/10/25"
    },
	{
		"title":"event 2",
		"date":"2019/10/26",
		"enddate":"2019/10/29"},
    {
		"title":"event 3", 
		"date":"2019/10/27"
	},
	{
		"title":"event 4",
		"date":"2019/10/10"
	},
	{
		"title":"event 5",
		"date":"2019/10/24",
		"enddate":"2019/10/28"
	}];
	
	for (var i=0, len = data.length; i < len; i++) {
		data[i].enddate ? (data[i].end = data[i].enddate) : null; 
		
		delete data[i].enddate;
	}
	
	const replacer = (key,value) => 
		 (key === "end" || key === "date") ? value.replace(/\//g,"-") : value;
			
	
	const dataReplaced =  JSON.stringify(data, replacer);
	
	const dataFinal = JSON.parse(dataReplaced);

document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new Calendar(calendarEl, {
    plugins: [ dayGridPlugin ],
	defaultView: 'dayGridMonth',
    defaultDate: '2019-10-12',
    eventLimit: true, // allow "more" link when too many events
 
    events: dataFinal
  });

  calendar.render();
});

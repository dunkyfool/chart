      google.charts.load('current', {'packages':['timeline']});
      google.charts.setOnLoadCallback(drawChart);

			function split(div, filas){
  			$('#'+div+' text:contains("Today")').css('font-size','11px').attr('fill','#A6373C').prev().first().attr('height',filas*41+'px').attr('width','1px').attr('y','0');
  		}      
      
      function drawChart() {
        var container = document.getElementById('timeline');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();

        dataTable.addColumn({ type: 'string', id: 'President' });
        dataTable.addColumn({ type: 'string', id: 'Description' });
        dataTable.addColumn({ type: 'date', id: 'Start' });
        dataTable.addColumn({ type: 'date', id: 'End' });
        dataTable.addRows([
          [ 'Time',   'Today', new Date(1801, 2, 4),  new Date(1801, 2, 4) ],
          [ 'Washington', '', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
          [ 'Adams',      '', new Date(1797, 2, 4),  new Date(1801, 2, 4) ],
          [ 'Jefferson',  '', new Date(1801, 2, 4),  new Date(1809, 2, 4) ]]);

        chart.draw(dataTable);
        split('timeline',4);
        
  			//google.visualization.events.addListener(chart, 'onmouseover', function(obj) {
    		//	split('timeline');
    		//});
      }

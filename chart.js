function drawChart(e,sampleData){
    
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Population');
    console.log(sampleData);
    data.addRows(sampleData);

    var chart = new google.visualization.ColumnChart(document.getElementById('chart'));
    chart.draw(data,{
        "title":"Population Chart(countrys with population greater than 100000000)"
        });
}
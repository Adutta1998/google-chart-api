dataArray  = [];
function genDataArray(x,y){
    dataArray.push(Array(x,y));
    console.log(dataArray);
    //drawChart();  
    google.charts.load('current', {'packages':['corechart']});
    var timeout = setInterval(function () {
        if (google.visualization != undefined) {
           drawChart();
           clearInterval(timeout);
        }
     }, 300);
}
function drawChart(){
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'X');
    data.addColumn('number', 'Y');
    data.addRows(dataArray);
    var chart1 = new google.visualization.LineChart(document.getElementById('chart1'));
    var chart2 = new google.visualization.ScatterChart(document.getElementById('chart2'));

    chart1.draw(data);
    chart2.draw(data);

}
# Runtime Implimentation of Dot Graph
#### Renewed chart.js file

This is simply create to Impliment runtime data into google chart Api

In some cases we face time problem to load the api.
To conqure that a simple Javascript pole function is created

```javascript
/// if google.visualization != undefined then only the drawchart works!!
var timeout = setInterval(function () {
        if (google.visualization != undefined) {
           drawChart();
           clearInterval(timeout);
        }
     }, 300);
```

## Happy Coding
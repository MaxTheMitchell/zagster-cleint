$(updateVeiw)

const Base_URL = "https://zagster-service.herokuapp.com"
var Distance = [];

function updateVeiw(){
    
    $.getJSON(Base_URL + "/rides/locations_and_times", AdvVol);
    $.when(
    $.getJSON(Base_URL + "/rides/locations_and_times", displayGraph))
    .then(
    displayGraph()
    );
}

function AdvVol(Data){
    var limit = 19276;
    for (var i =1 ;i <= limit;i++ )
    //if( Data[i] == "undefined", i=0)
    {
    startT = Data[i]["start_time"];
    endT = Data[i]["end_time"];
    startLat = Data[i]["start_lat"];
    endLat = Data[i]["end_lat"];
    startLon = Data[i]["start_lon"];
    endLon = Data[i]["end_lon"];
    LatDist = endLat - startLat;
    LonDist = endLon -startLon;
    TotalDist = Math.sqrt((LatDist * LatDist)+(LonDist * LonDist ));
    Distance.push(TotalDist);
    
        }
        
}
function displayGraph(Data){
    console.log(Distance);
    var ctx = document.getElementById("scatterChart2").getContext('2d');
    var scatterChart2 = new Chart(ctx, {
        type: 'line',
        data: {
            labels:  [1, "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: 'average velocity over time',
                data: [23,4,21,1],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',]
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                    
                }]
            }
        }  
    });
}

   
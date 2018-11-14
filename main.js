$(updateVeiw)

const Base_URL = "https://zagster-service.herokuapp.com"

function updateVeiw(){
    $.getJSON(Base_URL + "/rides/count" , updateRideCount)
}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}
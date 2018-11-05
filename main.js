$(updateVeiw)

const Base_URL = "https://zagster-service.herokuapp.com"

function updateVeiw(){
    alert("CLICK 'OK' FOR FREE I-PHONE!!!")
    $.getJSON(Base_URL + "/rides/count" , updateRideCount)
}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}
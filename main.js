$(updateVeiw)

const Base_URL = "https://zagster-service.herokuapp.com"

function updateVeiw(){
    $.getJSON(Base_URL + "/rides/locations_and_times", RidePerYear)
}

function RidePerYear(Data){
    console.log(Data)
}

   
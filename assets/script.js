var queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat="+ lat + "&lon=" + lon + "&appid=" + APIkey
var APIkey = "8b5ebef5e27f399568c79c7b46e5d128"
var searchInput = "search-input"
 var searchBtn = $("#search-button")

 searchBtn.on("click", function(){
    searchInput = $("#search-form").val();
    console.log("Weather for Today is: " + searchInput);
    $.ajax({
        url: "8b5ebef5e27f399568c79c7b46e5d128",
        method:"GET"
    }) .then(function(response){
        console.log(response);
    })
 })

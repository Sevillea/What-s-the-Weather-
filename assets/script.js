var queryURL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
var APIkey = "8b5ebef5e27f399568c79c7b46e5d128"
$(document).ready(renderCity());

// GLOBAL VARIABLES 
const searchInput = "search-input";
const searchBtn = $("#search-button");
const cities =[];


 $(searchBtn).on("click", (event) => {
    event.preventDefault();
    if (searchInput === ""){
    console.log("Weather for Today is: " + searchInput)
    $.ajax({
        url: "8b5ebef5e27f399568c79c7b46e5d128",
        method:"GET"
    }) .then(function(response){
        console.log(response);
    });
    searchInput = $("#city-search").val();
    storeCity(searchInput);
    renderCity();
    WeatherResult(searchInput);
    WeatherResultFuture(searchInput);
    
 }});

 function storeCity(cityInput) {
    cities.push(cityInput);
    localStorage.setItem("cities", JSON.stringify([...cities]));

 }

 function renderCity(){
    let cityDiv=$("#previous-city");
    $(cityDiv).empty();
    $.each(JSON.parse(localStorage.getItem("cities")), function(i, city){
        let newCity = $("<li>" + city + "<li>");
        newCity.addClass("list-item").appendTo(cityDiv);
    })
 }

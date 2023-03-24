
$(document).ready(function (){
    let NowMoment = moment().format("l");

    // Forecast Days:

    let day1 = moment().add(1, "days").format("l");
    let day2 = moment().add(2, "days").format("l");
    let day3 = moment().add(3, "days").format("l");
    let day4 = moment().add(4, "days").format("l");
    let day5 = moment().add(5, "days").format("l");

    //Global Variables:

    let city;
    let cities;
})






$(document).ready(renderCity());

// GLOBAL VARIABLES 
const searchInput = "search-input";
const searchBtn = $("#search-button");


 $(searchBtn).on("click", (event) => {
    event.preventDefault();
    if (searchInput === ""){
    console.log("Weather for Today is: " + searchInput)
    
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

//  function renderCity(){
//     let cityDiv=$("#previous-city");
//     $(cityDiv).empty();
//     $.each(JSON.parse(localStorage.getItem("cities")), function(i, city){
//         let newCity = $("<li>" + city + "<li>");
//         newCity.addClass("list-item").appendTo(cityDiv);
//     })
//  }

function WeatherResult(cityInput){
    var queryURL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}';
    var APIkey = "21efe940b8d2ff3f05f5347e20721883";
    $.ajax({
        url: queryURL,
        method:"GET"
    }) .then(function(response){
        console.log(response);
        findMeWeather(response);
    });
}

$(document).on("click", ".list-group-item", function (event) {
    $("#current-weather-card").empty();
    $("#forecast-future").empty();
    WeatherResult(event.target.innerHTML);
    WeatherResultFuture(event.target.innerHTML);
  });

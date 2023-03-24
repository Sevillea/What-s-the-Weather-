
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

    // Getter from local storage for most recent city searched:

    function loadMostRecent(){
        let lastSearch = localStorage.getItem("mostRecent");
        if (lastSearch) {
            city = lastSearch;
            searchBtn();
        } 
        else {
            city = "London"
            search();
        }
    }

    loadMostRecent()

    // Getter from local storage for recently searched cities:

    function loadRecentCities() {
        let recentCities = JSON.parse(localStorage.getItem("cities"));
        if (recentCities){
            cities - recentCities;
        }
        else {
            cities = [];
        }
    }
    loadRecentCities()

    $("#submit").on("click", (e) => {
        e.preventDefault();
        getCity();
        search();
        $("#city-input").val("");
        listCities();
    });

    // Save the cities searched to local storage:

    function saveToLocalStorage(){
        localStorage.setItem("mostRecent", city);
        cities.push(city);
        localStorage.setitem("cities", JSON.stringify(cities));
    }

    // Retrieve chosen city inputted by user:

    function getCity(){
        city = $("#city-input").val();
        if (city && cities.includes(city) === false){
            saveToLocalStorage();
            return city;
        }
        else if (!city){
            alert("Oops, that doesn't look like a city");
        }
    }

    // API search:

    function search(){
        let queryURL = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}" + city;
        let coords = [];

        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function(response){
            coords.push(response.coord.lat);
            coords.push(response.coord.lon);
            let cityName = response.name;
            let cityCond = response.weather[0].description.toUpperCase();
            let cityTemp = response.main.temp;
            let cityHum = response.main.humidity;
            let cityWind = response.wind.speed;
            let icon = response.weather[0].icon;
            $("#icon").html(
              `<img src= "https://openweathermap.org/img/wn/10d@2x.png">`
            );
            $("#city-name").html(cityName + " " + "(" + NowMoment + ")");
            $("#city-cond").text("Current Conditions: " + cityCond);
            $("#temp").text("Current Temp (F): " + cityTemp.toFixed(1));
            $("#humidity").text("Humidity: " + cityHum + "%");
            $("#wind-speed").text("Wind Speed: " + cityWind + "mph");
            $("#date1").text(day1);
            $("#date2").text(day2);
            $("#date3").text(day3);
            $("#date4").text(day4);
            $("#date5").text(day5);
      
            getUV(response.coord.lat, response.coord.lon);

        }).fail(function(){
            alert("Oops, could not retrieve data")
        });
        
        function getUV(lat, lon){
            $.ajax({
                url:
            })
        }
    }




})






// $(document).ready(renderCity());

// // GLOBAL VARIABLES 
// const searchInput = "search-input";
// const searchBtn = $("#search-button");


//  $(searchBtn).on("click", (event) => {
//     event.preventDefault();
//     if (searchInput === ""){
//     console.log("Weather for Today is: " + searchInput)
    
//     searchInput = $("#city-search").val();
//     storeCity(searchInput);
//     renderCity();
//     WeatherResult(searchInput);
//     WeatherResultFuture(searchInput);
    
//  }});

//  function storeCity(cityInput) {
//     cities.push(cityInput);
//     localStorage.setItem("cities", JSON.stringify([...cities]));

 

//  function renderCity(){
//     let cityDiv=$("#previous-city");
//     $(cityDiv).empty();
//     $.each(JSON.parse(localStorage.getItem("cities")), function(i, city){
//         let newCity = $("<li>" + city + "<li>");
//         newCity.addClass("list-item").appendTo(cityDiv);
//     })
//  }

// function WeatherResult(cityInput){
    
//     var APIkey = "21efe940b8d2ff3f05f5347e20721883";
    

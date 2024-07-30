const apikey="11618ef7c1d64cf10368e73934c6b2d2";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox =document.querySelector(".search input");
const searchBtn =document.querySelector(".search button");
const weathericon=document.querySelector(".weather_icon");
async function checkweather(city){
    const response=await fetch(apiurl  + city + `&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
document.querySelector(".temp_value").innerHTML=Math.round(data.main.temp) + '°C';
document.querySelector(".city1").innerHTML=data.name;
document.querySelector(".feel_like").innerHTML=Math.round(data.main.feels_like) + '°C';
document.querySelector(".humid").innerHTML=data.main.humidity + '%';
document.querySelector(".wind_speed").innerHTML=Math.round(data.wind.speed )+ ' Km/h';
document.querySelector(".rain_chance").innerHTML=data.clouds.all +'%';
document.querySelector(".temp_max").innerHTML=Math.round(data.main.temp_max + .1*data.main.temp) + '°C';
document.querySelector(".temp_min").innerHTML=Math.round(data.main.temp_min - .08*data.main.temp) + '°C';

if(data.weather[0].main=='Haze'){
    weathericon.src ="./haze.png";
}
else if(data.weather[0].main=='Clear'){
    weathericon.src ="./sun.png";
}
else if(data.weather[0].main=='Rain'){
    weathericon.src ="./rainy-day.png";
}
else if(data.weather[0].main=='Drizzle'){
    weathericon.src ="./drizzle.png";
}
else if(data.weather[0].main=='Mist'){
    weathericon.src ="./haze (2).png";
}
else if(data.weather[0].main=='Clouds'){
    weathericon.src ="./cloud.png";
}
}
searchBtn.addEventListener("click" , ()=>{
    checkweather(searchBox.value);
});



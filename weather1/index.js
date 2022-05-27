// `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a73a718241e013d65ebf19421e4f9ef2`;
// f953aaca4143ec6990f87145b3ad8eeb
//https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key
const api_key="a73a718241e013d65ebf19421e4f9ef2";
const cnt=7;
async function getData(){
    let city=document.getElementById("city").value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    //let url=`api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${cnt}&appid=${api_key}`
    console.log(url);
    let res= await fetch(url);
    let data=await res.json();
    
    append(data);
    console.log(data);
}

function append(data){
    let container=document.getElementById('container');
    let map=document.getElementById('gmap_canvas')
    container.innerHTML=null

    let city=document.createElement('h1');
    city.innerText=`City: ${data.name}`;

    let min=document.createElement('h3')
    min.innerText=`Min Temp: ${data.main.temp_min}`;

    let max=document.createElement('h3')
    max.innerText=`Max Temp: ${data.main.temp_max}`;

    let current=document.createElement('h3')
    current.innerText=`Current temp: ${data.main.temp}`;

    let humidity=document.createElement('h3')
    humidity.innerText=`Humidity: ${data.main.humidity}`;

    let wind=document.createElement('h3')
    wind.innerText=`Wind Speed: ${data.wind.speed}`;

    let cloud=document.createElement('h3')
    cloud.innerText=`Clouds: ${data.clouds.all}`;

    let sunrise =document.createElement('h3')
    sunrise.innerText=`Sunrise: ${data.sys.sunrise}`;

    let sunset=document.createElement('h3')
    sunset.innerText=`Sunset: ${data.sys.sunset}`;

    container.append(city,min,max,current,humidity,wind,cloud,sunrise,sunset)

    map.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`
}

// function getLocalWeather(){
//     navigator.geolocation.getCurrentPosition(success);

//     function success(position){
//         const latitude=position.coords.latitude;
//         const longitude=position.coords.longitude;

//         console.log(latitude);
//         console.log(longitude);
//     }
// }
// getLocalWeather();

//api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid=${api_key}
//const api_key="a73a718241e013d65ebf19421e4f9ef2";
//let url=`api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=a73a718241e013d65ebf19421e4f9ef2`
function getData(){
    let city=document.getElementById('city').value;
    
    const url=`api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&appid=a73a718241e013d65ebf19421e4f9ef2`

    fetch(url).then(function (res){
        return res.json();
    })
    .then(function (res){
        append(res)
        console.log(res);
    })
    .catch(function(err){
        console.log(err)
    })
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
//api.openweathermap.org/data/2.5/forecast/daily?q={city name}&cnt={cnt}&appid=${api_key}
//const api_key="a73a718241e013d65ebf19421e4f9ef2";
//let url=`api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=a73a718241e013d65ebf19421e4f9ef2`

var api_key ="f953aaca4143ec6990f87145b3ad8eeb"
let getData = async() => {
    try{
        let city =document.getElementById("city").value
        let url=`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=7&appid=${api_key}`

        let res = await fetch(url);
        let data =await res.json();
        append(data.list);
        console.log(data.list);
    }catch(err){
        console.log(err);
    }
  };

  let append = (data) => {
    let container = document.getElementById("show_items");
    data.forEach(({ main: { temp_min }, main: { temp_max } }) => {
      let div = document.createElement("div");

      let img=document.createElement("img")
      img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJeaz4zgOMOgF3U6HoPhgbajddjsEeOUNscQ&usqp=CAU"
      img.setAttribute("id","image")
      
      let min=document.createElement('h6')
    min.innerText=temp_min-273;

    let max=document.createElement('h6')
    max.innerText=temp_max-273;

    div.append(img,min,max);
      container.append(div);
    });
  };
  


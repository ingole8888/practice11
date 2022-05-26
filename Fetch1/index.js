function getdata(){

    container.innerHTML=null;

    var movie =document.getElementById("mov").value;
    console.log(movie)
        
       var url =`https://www.omdbapi.com/?apikey=793f7c2e&t=${movie}`


    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
      console.log(res);
       if(res.Response=="True"){
         append(res);
       }
       else{
           geterr(err);
       }
    })
    .catch(function(err){
        console.log(err);
        geterr(err);
    })


    
   function append(data){

    var container =document.querySelector("#container");
    
    var div =document.createElement("div");
    div.style="padding:20px;box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"

    var title=document.createElement("h1");
    title.innerText=`Name-${data.Title}`;

    var img=document.createElement("img");
    img.src=data.Poster;

    var date =document.createElement("p");
    date.innerText=`Date-${data.Released}`;

    let imdb=document.createElement('h3')
    imdb.innerText=`Rating-${data.imdbRating}`;
    if(data.imdbRating>8.5){
        let recommended=document.createElement('h1');
        recommended.innerText='Recommended'
        div.append(recommended,img,title,date,imdb);
        container.append(div);
    }
    else{
        div.append(img,title,date,imdb);
        container.append(div);
        }
}
}
function geterr(err){

    var container =document.querySelector("#container");
    container.innerHTML=null;

    var div =document.createElement("div");
    div.style="padding:20px;box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;";

    var img=document.createElement("img");
    var g =document.createElement("h2");
    g.innerText="Please try different Name"
    
    img.src="https://c.tenor.com/IHdlTRsmcS4AAAAM/404.gif";

    div.append(img,g);
    container.append(div);
}




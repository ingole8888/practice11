// AIzaSyBgtmQlN4a_DcO2aWa079_t6Zff_hJLA-4
let url1 =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=movies&key=AIzaSyBgtmQlN4a_DcO2aWa079_t6Zff_hJLA-4`
 
const show = async() => {
    try{
        const res = await fetch(url1);
        const data =await res.json();
        console.log(data.items);
        append(data.items);
    }catch(err){
        console.log("err");
    }
  }
const show_data = async() => {
    try{
        let input =document.getElementById("input").value
        let url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=AIzaSyBgtmQlN4a_DcO2aWa079_t6Zff_hJLA-4`

        const res = await fetch(url);
        const data =await res.json();
        console.log(data.items);
        append(data.items);
    }catch(err){
        console.log("err");
    }
  }
//   <iframe width="560" height="315"
//    src="https://www.youtube.com/embed/tZ_fEv2CE74"
//     title="YouTube video player" frameborder="0" 
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;
//    picture-in-picture" allowfullscreen></iframe>
const append=(video)=>{
    let container =document.getElementById("show_items");
    container.innerHTML=null;
    video.forEach( (el)=>{
        let div=document.createElement("div");
    let img =document.createElement("img");
    img.src=el.snippet.thumbnails.default.url;
   img.addEventListener("click",()=>{
       newpage(el);
   })
    console.log(img.src);
        // let iframe =document.createElement("iframe");
        // iframe.src=`https://www.youtube.com/embed/${videoId}`;
        // iframe.width="100%";
        // iframe.height="185px";
        // iframe.allow="fullscreen";
        let =name1 =document.createElement("h3");
      name1.innerText=el.snippet.title;
      name1.style="margin-top:-3px;padding-bottom:10px"
      div.append(img,name1);
      div.style="padding:10px; margin-top:20px "
      div.setAttribute("id","div");
      container.append(div);
      })
}
let newpage =(el)=>{
   window.location="video.html";
   localStorage.setItem("video",JSON.stringify(el));
}
show();
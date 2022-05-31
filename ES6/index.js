let url1 =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=movies&key=AIzaSyBgtmQlN4a_DcO2aWa079_t6Zff_hJLA-4`
 
const Page = async() => {
    try{
        const res = await fetch(url1);
        const data =await res.json();
        console.log(data.items);
        append(data.items);
    }catch(err){
        console.log("err");
    }
  }


var api_key ="AIzaSyBgtmQlN4a_DcO2aWa079_t6Zff_hJLA-4"
let show = async() => {
    try{
        let input =document.getElementById("input").value
        let url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${input}&key=${api_key}`

        let res = await fetch(url);
        let data =await res.json();
        append(data.items);
        console.log(data);
    }catch(err){
        console.log(err);
    }
  };

  let append = (data) => {
  let container = document.getElementById("show_items");

  // console.log(data);
  // data.forEach((el) => { el.id.videoId/ el.snippet.title
  data.forEach(({ id: { videoId }, snippet: { title, thumbnails } }) => {
    let div = document.createElement("div");
    div.setAttribute("id","hower")
    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.allow = "fullscreen";
    let h3 = document.createElement("h3");
    h3.innerText = title;

    div.append(iframe, h3);

    let video = {
      title,
      videoId,
    };

    div.onclick = () => {
      playVideo(video);
    };

    container.append(div);
  });
};

let playVideo = (video) => {
 localStorage.setItem("video", JSON.stringify(video));
  window.location.href = "video.html";
};

Page();




//link-https://api.unsplash.com/search/photos/?query=$
//https://api.unsplash.com/search/photos
//https://api.unsplash.com/search/photos/?query=${value}&per_page=20&client_id=gK_qvg7dPUrg-9-2neTnHeCAsT_XEPvtZVa-62D1-lI
const API='gK_qvg7dPUrg-9-2neTnHeCAsT_XEPvtZVa-62D1-lI'
import {navbar} from "../components/navbar.js";
let n=document.getElementById('navbar');
n.innerHTML=navbar();

import {searchImages,append} from "../scripts/fetch.js";

let search=(e)=>{
    if(e.key==='Enter'){
        let value=document.getElementById('query').value;
        
        searchImages(API,value).then((data)=>{
            console.log(data)
            let container=document.getElementById('container')
            container.innerHTML=null;
            append(data.results,container)
        });
    }
}

document.getElementById('query').addEventListener('keydown',search)

let categories=document.getElementById('categories').children;
//console.log(categories)

function cSearch(){
    console.log(this.id);
    searchImages(API,this.id).then((data)=>{
        console.log(data);
        let container=document.getElementById('container');
        container.innerHTML=null;
        append(data.results,container)
    })
}
for(let el of categories){
    el.addEventListener('click',cSearch)
}


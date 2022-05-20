    var dataword =[
    {name:"SICARIO",realise_data:"20/10/2018",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBl5nTW90h7sr8sgqFHp2Wf2Eu3O_S24sq6A&usqp=CAU",rating:3},
     {name:"HULK",realise_data:"20/10/2016",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-bHauyqvOA4njlUgczUY8VvmYKjEpntKXg&usqp=CAU",rating:4},
     {name:"SPIDER-MAN",realise_data:"20/10/2012",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKaMNJEj30vxRsvgMvdDtnHa3uZWbsl4rM2g&usqp=CAU",rating:6},
     {name:"JOKER",realise_data:"20/10/2018",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDzmpNFC16JXXlQrh2pY_PdVuQbDHAKyuW3w&usqp=CAU",rating:5},
     {name:"MATRIX",realise_data:"20/10/2000",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMHzG-tKGsTYCIjrukl_dncZ_uf6aIHApqg&usqp=CAU",rating:7},   
     {name:"TITANIC",realise_data:"20/10/2000",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR46OESrRD_6_8x0Zh49-1vkKY0yC4QWzMWjw&usqp=CAU",rating:6},
     {name:"HISSS",realise_data:"20/10/2010",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMe8lPVCwbilUAMIgNJ0wywzlzMAjvCpjJ0g&usqp=CAU",rating:2},
     {name:"PERFUME",realise_data:"20/10/2000",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbxw9EICbqOlHEHKYEu86W35spjsk-QhJJOQ&usqp=CAU",rating:7},
     {name:"HOBBS & SHAW",realise_data:"20/10/2017",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5JVrmLem13OEC_l1j02zqCWnHgKENGYtZXw&usqp=CAU",rating:9}
    ]
   var arr=[];
    for(i=0;i<dataword.length;i++){
        arr.push(dataword[i])
    }

    localStorage.setItem("movies",JSON.stringify(dataword));
    var data =JSON.parse(localStorage.getItem("movies"));
    //  console.log(data)



    let sort1=  data.sort((b,a)=> b.rating-a.rating);

    let sort2=  dataword.sort(function (a,b){
        if(a.rating > b.rating){ return -1}
       else if(a.rating < b.rating){ return 1}
      return 0;

    });


    // console.log(sort1)
    // console.log(sort2)


    function decend(){
    document.querySelector("#container").innerHTML=null;
    display(sort2);

    }
        
    
    function ascend(){
        document.querySelector("#container").innerHTML=null;
        display(sort1)
    
    }

    function display(database){

        database.map(function(el){
            var img =document.createElement("img");
            img.src=el.poster;
            img.style="width:100%;height:200px"
        
            var name =document.createElement("h2");
            name.innerText=el.name;
        
            
            var release=document.createElement("h3");
            release.innerText=el.realise_data;
        
            var rating=document.createElement("h3");
            rating.innerText=el.rating;
        
            var div =document.createElement("div")
            div.append(img,name,release,rating);
            div.style="box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; padding:20px;text-align:center;background-color:#ccffff;"
        
            document.querySelector("#container").append(div);
        })
        
    }



    arr.map(function(el){
        var img =document.createElement("img");
        img.src=el.poster;
        img.style="width:100%;height:200px"

        var name =document.createElement("h2");
        name.innerText=el.name;

        
        var release=document.createElement("h3");
        release.innerText=el.realise_data;

        var rating=document.createElement("h3");
        rating.innerText=el.rating;

        var div =document.createElement("div")
        div.append(img,name,release,rating);
        div.style="box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; padding:20px;text-align:center;background-color:#ccffff;"

        document.querySelector("#container").append(div);
    })
    

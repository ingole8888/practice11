var data =JSON.parse(localStorage.getItem("products"));
// console.log(data)

var total = data.reduce(function (sum, elem, index, arr) {
  return sum + Number(elem.price);
}, 0);
console.log(total);

var length = data.length;
console.log(length);


// total is Rs 16365
//`` - template literals
document.querySelector("p").innerText = ` you have ${length} items in cart and  total is Rs ${total}`;

data.map(function(el,index){

var img =document.createElement("img");
img.src=el.image;

var name=document.createElement("h2");
name.innerText=el.name;

var category=document.createElement("h3");
category.innerText=el.category;

var price=document.createElement("h4");
price.innerText=el.price;

var gender=document.createElement("p");
gender.innerText=el.gender;

var sold=document.createElement("p");
sold.innerText=el.sold;

var remove= document.createElement("button");
remove.innerText="Remove";
remove.setAttribute("id","remove_product");
remove.addEventListener("click",function(){
  removeitem(el,index);
})


var div=document.createElement("div")
div.append(img,name,category,price,gender,sold,remove);
document.querySelector("#container").append(div)
})

function removeitem(el,index){
  data.splice(index,1);
  localStorage.setItem("products",JSON.stringify(data))
  window.location.reload();
}
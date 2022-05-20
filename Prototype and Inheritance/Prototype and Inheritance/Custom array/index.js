function Myarr(){
    Object.defineProperty(this,"length",{
         value:0,
         writable:true,
         enumerable:false,
    })
    for(let i=0;i<arguments.length;i++)
    {
        this[i]=arguments[i]

    }
    this.length=arguments.length;

}

let arr=new Myarr("x","y","z")
console.log("arr:",arr);

Myarr.prototype.push=function(value){
    let index=this.length;
    this[index]=value;
    this.length++;
}


Myarr.prototype.pop=function(){
let index=this.length-1;
delete this[index];
this.length--;
};





Myarr.prototype.top=function(value){
    let index=this.length-1;
    this[index]=value;
    this.length++;
}
 console.log(arr[top])


Myarr.prototype.reverse=function(value){
    let left=0;
    let right=arr.length-1;
    while(left<right){
        let temp=arr[left];
        arr[left]=arr[right]
        arr[right]=temp;
        left++;
        right--;
    }
}

// push
arr.push("a");
arr.push("g")

// pop
arr.pop()
arr.pop()

// top
arr.top(arr);

// reverse
arr.reverse(arr)
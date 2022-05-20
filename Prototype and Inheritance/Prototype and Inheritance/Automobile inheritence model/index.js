var fourwheeler={
    wheel:4,
    staring:true,
    automatic:true,


}
const suvCar=Object.create(fourwheeler);
suvCar.speed="120 Kmph"
console.log("suvCar",suvCar)


// by inheritance
// in constractor fun use .prototype use


function fourwheeler(w,s,a){
    this.wheel=w
   this.string=s
    this.automatic=a


}
fourwheeler.prototype.speed("180kmph")
let altroz=new fourwheeler(4,"smooth","feature")
console.log("altroz:",altroz)
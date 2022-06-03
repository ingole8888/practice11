var fourwheeler={
  wheel:4,
  staring:true,
  automatic:true,
}
const suvCar=Object.create(fourwheeler);
suvCar.speed="120 Kmph"
console.log("suvCar",suvCar)


class FourWhealler 
{
      constructor(b, bt ,s ,w)
     {
        this.brand = b;
        this.avarage = bt;
        this.gear = s;
        this.wheel =w;
      }
}
    
let m1 = new FourWhealler("TATA", "20km/hr", 5, 4);
console.log(m1);

class SmartCar extends FourWhealler 
{
  constructor(b, bt, s, w) 
  {
    super(b, bt ,s ,w);
    this.autoStart = true;
    this.airbag = true;
  }
}

let m2 = new SmartCar("TATA", "20km/hr", 5, 4);
console.log(m2);
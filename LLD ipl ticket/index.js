

class IPLticket {
    constructor(type, age, category) {
      this._type = type;
      this._age = age;
      this._category = category;
    }
  
    get type() {
      return this._type;
    }
  
    set type(value) {
      this._type = value;
    }
  }
  
  
  
  class VVIPs extends IPLticket {
    constructor(age, category) {
      super("vvips", age, category);
    }
  }
  
  
  
  class VIPs extends IPLticket {
    constructor(age, category) {
      super("vips", age, category);
    }
  }
  

  
  class General extends IPLticket {
    constructor(age, category) {
      super("general", age, category);
    }
  }
  
  // spots/Slots
  
  class Slot {
    constructor(type, number) {
      this.number = number;
      this.type = type;
      this._isBooked = false;
    }
  
    get isBooked() {
      return this._isBooked;
    }
  
    set isBooked(value) {
      this._isBooked = value;
    }
  }
  
  // Individual floors
  
  class TicketFloor {
    constructor(floorNumber, maxSpots) {
      this.floorNumber = floorNumber;
      this._ticketspot = [];
  
      for (let i = 0; i < maxSpots; i++) {
        if (i === 0) {
          this._ticketspot.push(new Slot("car", i));
        } else if (i === 1) {
          this._ticketspot.push(new Slot("bike", i));
        } else {
          this._ticketspot.push(new Slot("truck", i));
        }
      }
    }
  
    get ticketSpot() {
      return this._ticketspot;
    }
  }
  
  // Parking lot or the building
  
  class TicketLot {
    constructor(number) {
      this._floors = [];
      this._numberOfFloors = number;
  
      for (let i = 0; i < number; i++) {
        this._floors.push(new TicketFloor(i, 3));
      }
    }
  
    get numberOfFloors() {
      return this._numberOfFloors;
    }
  
    get floors() {
      return this._floors;
    }
  
    BookTicket(person) {
      let slot = this.findSlot(person.type);
  
      if (slot) {
        this.bookSlot(slot);
        let ticket = new Ticket(slot.floorNumber, slot.slot.number);
        console.log("Tiket: ", ticket);
      } else {
        console.log("No slots");
        return false;
      }
    }
  
    findSlot(type) {
      for (let i = 0; i < this._numberOfFloors; i++) {
        for (let slot of this._floors[i]._ticketspot) {
          if (slot.type === type && !slot.isBooked) {
            return { floorNumber: i, slot: slot };
          }
        }
      }
  
      return false;
    }
  
    bookSlot(slot) {
      slot.slot.isBooked = true;
      console.log("Slot is Booked");
      return true;
    }
  }
  
  // Ticket
  
  class Ticket {
    constructor(floorNumber, slotNumber) {
      this.floorNumber = floorNumber;
      this.slotNumber = slotNumber;
      this.issuedAt = new Date();
    }
  }
  
  let b1 = new VIPs("12", "male");
  
  let pl1 = new TicketLot(3);
  
  pl1.BookTicket(b1);
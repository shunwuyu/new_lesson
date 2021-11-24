// 工厂
class VehicleFactory {
  constructor() {
      this.vehicleClass = Car;
  }
  createVehicle(options) {
      if (options.vehicleType === "car") {
          this.vehicleClass = Car;
      } else {
          this.vehicleClass = Truck;
      }
      return new this.vehicleClass(options);
  }
}

class Car {
  constructor(options) {
      // some defaults
      options = options || "";
      this.doors = options.doors || 4;
      this.state = options.state || "brand new";
      this.color = options.color || "silver";
  }
}
class Truck {
  constructor(options) {
      this.state = options.state || "used";
      this.wheelSize = options.wheelSize || "large";
      this.color = options.color || "blue";
  }
}
//usage 
let carFactory = new VehicleFactory();
let car = carFactory.createVehicle({
  vehicleType: "car",
  color: "yellow",
  doors: 6
});
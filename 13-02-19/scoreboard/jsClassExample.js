class Car {
	//If you wanna use 'this' inside a class, you must call the constructor function!
  	constructor(make,model,mpg,tankSize){
    	this.make = make;
      	this.model = model;
      	this.mpg = mpg;
      	this.tankSize = tankSize;
    }
  	//You can put methods in a class instead of using prototype!
    updateModel(newModel){
      	this.model = newModel;
    }
  	distanceToEmpty(){
    	console.log(this.mpg * this.tankSize + " miles");
    }
  	turnOn(){
    	console.log("The car is on!");
    }
}

let gregsCar = new Car('Toyota','Camry',36,15);
gregsCar.distanceToEmpty();

class ElectricCar extends Car{
	constructor(make,model,batteryLife){
    	super(make,model);
      	this.batteryLife = batteryLife;
    }
  	distanceToEmpty(){
    	console.log(this.batteryLife*10);
    }
}

let davidCummingsCar = new ElectricCar('Tesla','X',100);
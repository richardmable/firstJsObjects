
//using a constructor function to create a laptop object
function laptop(memory, brand, screen_size){
	this.memory = memory;
	this.brand = brand;
	this.screen_size = screen_size;
};

//creating a new laptop, one called my_laptop, the other called other_laptop
var my_laptop = new laptop(16, "apple", 15);
var other_laptop = new laptop(24, "acer", 23);

//preffered to retrieve attributes with dot notation
//could use square bracket notation
alert(my_laptop.memory + "GB");
alert(other_laptop.brand + "Brand");

//can also have functions stored on the attributes of an object
var my_car = {
	brand: "Prius",
	friendly_brand: function(){
		return "Your car's brand is a " + this.brand;
	}
};

//in this context, functions are known as methods
//to access the method, just use () after the attribute name the function has
alert(my_car.friendly_brand());

//another example of a method on an object
//using the constructor function
function coffee_cup(coffee_type, oz, hot){
	this.coffee_type = coffee_type;
	this.oz = oz;
	this.hot = hot;
	this.your_coffee = function(){
		//the last part of this asks is a ternary operator, asking if the drink is hot or not (true or false)
		//first part after the ? is what it will return if true, second part is what it will return if false
		return "Your coffee is a " + coffee_type + ", size " + oz + ", and is " + (hot ? "hot." : "cold.");
	}
};

//create the coffee_cup object
var my_coffee = new coffee_cup("espresso", 16, true);

//access the method via alert function
alert(my_coffee.your_coffee());






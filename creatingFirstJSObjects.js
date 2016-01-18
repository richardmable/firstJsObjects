//using a constructor function to create a laptop object
//this way is more expensive in terms of processes for the computer, but can use it later
function laptop(memory, brand, screen_size){
	this.memory = memory;
	this.brand = brand;
	this.screen_size = screen_size;
};

//creating a new laptop, one called my_laptop, the other called other_laptop
var my_laptop = new laptop(16, "apple", 15);
var other_laptop = new laptop(24, "acer", 23);

//preferred to retrieve attributes with dot notation
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
console.log(my_coffee)
//adding prototypes to an object
//this is a way to add attributes to an already created object
//will not update attributes that have already been set on the object
//can only add set attributes, not modify the constructor to accept new arguments
//or anything like that
//add an attribute with a string
coffee_cup.prototype.coffee_brand = "green line";
//add an attribute with a boolean
coffee_cup.prototype.consumed = false;
//add an attribute with a function
coffee_cup.prototype.drunk = function(){
	//need 'this' to refer back to this instance's particular coffee cup
	return "Your coffee has been" + (this.consumed ? " consumed!" : " not consumed, get going!");
};

//call the function added through the prototype
alert(my_coffee.drunk());
//print to console so that we can see that changes were made from the pre-prototyping the object
console.log(my_coffee);















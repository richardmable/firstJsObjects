// 4. Implement an object model that allows you to store strings that represent a Photo. 
// Your model should include an Album object that can contain many Photo objects in its photos attribute. 
// Each Album should allow you to add a new photo, list all photos, and access a speciﬁc photo by the order it was added. 
// Each Photo should tell you the photo's ﬁle name and the location the photo was taken in. 
// Create instances of each object deﬁned to prove that your object model works.
// 5. Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
// Each of these objects should have attributes and methods pertinent to what they describe. 
// Also create a School object that should be able to store instances of students and teachers. 
// Make sure to write code afterwards that creates instances of these objects to make sure that 
// what you've written works well and you're able to store the necessary data in each object.


// Write a method that lists the properties of a JavaScript object.

//create the object and its properties
var kylo_ren = {
	cape_color: "Black",
	dress_color: "Black",
	face_mask_color: "Black",
	lightsaber: "Red",
	mood: "Is Angry",
	has_fits: true,
	force_side: "Dark",
	force_power: "Not enough to beat Rey",
	has_perfect_hair: true,
	answers_to: "Supreme Leader Snope"
}

//make sure the document is loaded so that it can find the elements, etc
window.onload = function() {
	//now loop through each property and print to console
	// grab the key in the var kylo_ren
	for (var key in kylo_ren) {
		//if kylo_ren has his own property of that key, not inherited from prototypes, or meta-information
		//otherwise, this would loop through all properties including prototypes which is not desired
		if (kylo_ren.hasOwnProperty(key)){
			//this prints to console the key and then the value with an arrow in between
			console.log(key + " -> " + kylo_ren[key]);
			//create an element of p and assign it to n
			var n = document.createElement("P");
			//this creates a text node and assigns it to var t
			var t = document.createTextNode(key + ": " + kylo_ren[key]);
			//this appends it to the newly created p element
			n.appendChild(t);
			//this places it on the page by taking the newly created element and its new node and appending it to 
			//the krproperties div that is already in the page
			document.getElementById("krproperties").appendChild(n);
		}
	};


// 3. Create an object called  Multiplier  with two methods:  multiply  and  getCurrentValue .  if you do
// var m = new Multiplier(6), returns 6.
// then console.log(m.getCurrentValue()); should return 6
// then m.multiply() returns 6
// m.multiply(7) returns 42
// m.getCurrentValue should return 42

function Multiplier(num){
	//return the number supplied when a Multiplier object was created
	this.multiply = function() { return num * 1

	};
	this.getCurrentValue = function() {
		return num
	};
	
}



//this } is the end of the window onload function
};







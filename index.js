//inheritance*

function Student(name, degrees) {
    this.name = name;
    this.degrees = degrees;
    
};


Student.prototype.sayName = function() {
    console.log("Hi my name is " + [this.name]);
    console.log("And I have " + [this.degrees] + "degrees")
};



// provided code to test above constructor and method
var you = new Student("Richard Fitzwell", 31415926535897932384626433832795028841971693993751);
you.sayName();

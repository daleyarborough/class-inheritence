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
var you = new Student("Richard Fitzwell", 31415962853589793236264338);
you.sayName();

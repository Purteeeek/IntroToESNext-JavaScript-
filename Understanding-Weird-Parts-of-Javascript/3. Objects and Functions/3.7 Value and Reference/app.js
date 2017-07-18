// By value.

var a = 2;
var b;
b = a;
a = 3;
console.log(a); // 3
console.log(b); // 2

// when a primitive type in javascript is copied or passed to a function. a new space in the memory is set up
// and the content is actually copied.
// so when b = a happened. 
// actual content from a was placed copied into a new memory space. which was associated with b
// this is called by value.
// and thats the reason why, when a was changed b did not go through any change.
// this is followed with primitives in javascript

// By Reference.

// With objects and functions. the case is different. 
// lets see this. 

var c = { name : "Pratik" }
var d;
d = c ;
c.name = "Abhishek";
console.log(c);
console.log(d);

// You will be surprised that in both c and d the name property was changed to Abhishek, where as you might
// have expected Pratik in d.
// What happens during the case of objects is.
// when d = c was executed
// no new memory space was set up and the content was not copied.
// instead, d also pointed at the same memory location 
// this is like you having two names, an alias.
// because as both the things are pointing to the same location, the content change will be reflected .
// c and d are just two different names for the same object in this case. 


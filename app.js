// ES5 Global Constants
// var PI = 3.14;
// PI = 42 <- Do Not Allow This!

// ES2015 Global Constants
const PI = 3.14;
PI = 42; // Cannot reassign const

// Q: What is the difference between var and let?
// A: When declared a var will be declared at the function scope and can be redeclared, while
//    a let will be declared at the block scope and can not be redeclared. Both can be reassigned and mutate.

// Q: What is the difference between var and const?
// A: Similar to let, const will follow block scope rules vs. function scope of var. In addition, const can neither be
//    redeclared nor reassigned, where var can do both these things. Both const and var can mutate.

// Q: What is the difference between let and const?
// A: The difference between let and const is that a let can be reassigned while a const cannot. Other than this, they both can not
//    be redeclared, can both mutate, and both follow scope rules.

// Q: What is hoisting?
//    Hoisting applies only to vars and is the behavior that when executing JS the var will be declared first before it is assigned a value
//    as if the var was declared at the very first line of the script.
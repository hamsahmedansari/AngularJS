// Assertion is BuildIn Function of different type
// Check out Defined Variable Type like string and its Assertion
var Message = "abc"; //string
var EndWithC = Message.endsWith('c');
// But when Variable Type is Any we have to define Assertion type manually i.e
var MessageTypeAny; //any
MessageTypeAny = "abc";
var StartWithA = MessageTypeAny.startsWith('a');
// checking result
console.log("End with C : " + EndWithC);
console.log("Start with A : " + StartWithA);

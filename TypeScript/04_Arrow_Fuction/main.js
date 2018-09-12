// There are different types of function declaration 
// First
var FirstDoLog = function (message) {
    console.log(message);
};
// Second
var SecondDoLog = function (message) {
    console.log(message);
};
// Third
var ThirdDoLog = function (message) { return console.log(message); };
// Fourth
var FourthDoLog = function () { return console.log('Fourth'); };
// Output
FirstDoLog('First');
SecondDoLog('Second');
ThirdDoLog('Third');
FourthDoLog();

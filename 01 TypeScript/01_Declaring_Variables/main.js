// using (var) in TypeScript it is accessable out side of block element
function doSomethingWithVar() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally value of i using var : ' + i);
}
doSomethingWithVar();
/* Result
0
1
2
3
4
Finally value of i using var : 5
*/
// by using (let) in TypeScript it is not access able out side of block element 
// but on run time it changes to (var) 
function doSomethingWithlet() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    //  its shows error on compile time but on run time when var changes to let it automatically   resolve it 
    console.log('Finally value of i using let : ' + i);
}
doSomethingWithlet();
/* Result
0
1
2
3
4
Finally value of i using let : 5
*/ 

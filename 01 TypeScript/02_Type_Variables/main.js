/*
    By initalizing  variable it also declare its Type i.e
        let a = 1 ;
    on above (a) its type is now number we can't its Type like this
        a = "test" ; (This Shows Error but on compile time when let convert in to var error will bi resolve)
*/
var a = 1;
// a = "Test"; (Error of type number)
/*
    But when we didn't initialized variable buy Default its Type is (any) than this will work
*/
var b; //type :any
b = 1; //number
b = true; //boolean
b = "Test"; //string
/*
    On compile Time The Result will be
        Test
    because its on last
*/
/*
    We can initlized variable by
        let c:number ;
    so it will be type number
*/
var c;
c = 1;
// c = "as"; (error of type)
/*
    Type of Variable
    let d: number ;
    let e: string ;
    let f: boolean ;
    let g: any ;
*/
var d;
var e;
var f;
var g;
/*
    Array
    let h: number[] = [1,2,3];
    let i: any[] = [1,'abc',true]
*/
var h = [1, 2, 3];
var i = [1, 'abc', true];
/*
    Const
    const j = 1;
*/
var j = 1;
/*
    enum declaring
        enum Color {red = 1 , black =2};
    to access
        Color.red // its show vale 1
*/
var Color;
(function (Color) {
    Color[Color["red"] = 1] = "red";
    Color[Color["black"] = 2] = "black";
})(Color || (Color = {}));
;
var BackgroundColor = Color.black; // 2
// DON'T FORGET TO CHECK JS FILE

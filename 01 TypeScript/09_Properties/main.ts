// Properties
// get 
// set

class Point {
    private x: number;
    private y: number;

    
    constructor(x? :number , y? :number){
        this.x = x;
        this.y = y;
    }

    draw (){
        console.log('value of x : ' + this.x);
    }
    
    get X(){
        return this.x;
    }

    set X(value){
        if(value < 0)
            console.log('value cannot be less than zero ');
        
        this.x = value;
        
    }

}


   let point = new Point(1);
   console.log('Get x value : ' + point.X);
   //Setting X value to 2
   point.X = 2;
   //logging X value
   point.draw();
   

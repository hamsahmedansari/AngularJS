export class Point {
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


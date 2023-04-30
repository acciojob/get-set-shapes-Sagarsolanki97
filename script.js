
function shape(width,height){
	constructor(width,heigth)
	{this.width = width;
	this.height = heigth;}
	
};


const Rectangle extends shape = new shape() {
 getWidth();
	getHeight();
	getArea();
    }

    get getWidth() {
        return this.width;
    }

    get getHeight() {
        return this.height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    getPerimeter() {
        return 4 * this.width;
    }
}

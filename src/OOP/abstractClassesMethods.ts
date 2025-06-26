abstract class Shape{
    constructor (public color: string){}

    abstract render(): void;
}

class Circle extends Shape{
    constructor (public radius: number, color: string){
        super(color);
    }

    override render(): void {
        console.log('Rendering a circle');
    }
}

// let shape = new Shape('red'); can't create an instance of the abstract class
// shape.render();
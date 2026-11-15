class Shape {
    area() {
        throw new Error("Not implemented");
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

const shapes = [
    new Rectangle(3, 4),
    new Circle(2),
    new Rectangle(5, 6)
];

for (const shape of shapes) {
    console.log(shape.area());
}

// Expected Output:
// 12
// 12.566370614359172 (approx. 4 * Math.PI)
// 30
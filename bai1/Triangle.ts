export class Triangle {
    private ma: number;
    private mb: number;
    private mc: number;


    //constructor

    constructor();
    constructor(ma: number, mb: number, mc: number);
    constructor(ma?: number, mb?: number, mc?: number) {
        this.ma = ma || 0;
        this.mb = mb || 0;
        this.mc = mc || 0;

        if (this.isInvalidTriangle()) {
            this.ma = this.mb = this.mc = 0;
        }
    }

    private isInvalidTriangle(): boolean {
        return this.ma <= 0 || this.mb <= 0 || this.mc <= 0 || this.ma + this.mb <= this.mc || this.ma + this.mc <= this.mb || this.mb + this.mc <= this.ma;
    }

    //getter, setter

    public getMa(): number {
        return this.ma;
    }

    public setMa(ma: number): void {
        if (ma > 0) {
            this.ma = ma;
        }
    }

    public getMb(): number {
        return this.mb;
    }

    public setMb(mb: number): void {
        if (mb > 0) {
            this.mb = mb;
        }
    }

    public getMc(): number {
        return this.mc;
    }

    public setMc(mc: number): void {
        if (mc > 0) {
            this.mc = mc;
        }
    }

    // calculate Triangle

    public calcPerimeter(): number {
        return this.ma + this.mb + this.mc;
    }

    public calcArea(): number {
        const s = this.calcPerimeter() / 2;
        return Math.sqrt(s * (s - this.ma) * (s - this.mb) * (s - this.mc));
    }

    public getTriangleType(): string {
        if(this.isInvalidTriangle()){
            return "Invalid Triangle";
        }
        if (this.ma === this.mb && this.mb === this.mc) {
            return "Equilateral Triangle"; //Tam giac deu
        } else if (this.ma === this.mb || this.mb === this.mc || this.ma === this.mc) {
            return "Isosceles Triangle"; //Tam giac can
        } else {
            return "Scalene Triangle"; //Tam giac thuong
        }
    }

    public toString(): string {
        return `Triangle: ${this.ma}, ${this.mb}, ${this.mc} \n Type: ${this.getTriangleType()} \n Perimeter: ${this.calcPerimeter()} \n Area: ${this.calcArea()} \n\n`;
    }

    public toObject(): Object {
        return {
            size: `${this.ma}, ${this.mb}, ${this.mc}`,
            type: `${this.getTriangleType()}`,
            perimeter: `${this.calcPerimeter()}`,
            area: `${this.calcArea()}`
        }
    }
}

const main = () => {
    const triangle1: Triangle = new Triangle(3, 4, 5);
    const triangle2: Triangle  = new Triangle(-1, 2, 3); // Khong phai tam giac
    const triangle3: Triangle  = new Triangle(5, 5, 5); // Tam giac deu
    const triangle4: Triangle  = new Triangle(5, 5, 6); // Tam giac can
    const triangle5: Triangle  = new Triangle(7, 8, 9); // Tam giac thuong
    const triangles : Triangle[] = [triangle1, triangle2, triangle3, triangle4, triangle5];
    // Print table triangle
    console.log("Table Triangle:");
    let arr : any[] = [];
    triangles.forEach((triangle, index) => {
        arr.push(triangle.toObject())
    });
    console.table(arr);
    
}

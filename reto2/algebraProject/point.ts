
export class Point
{
    private x:number;
    private y:number;

    constructor(x:number,y:number)
        {
            this.x = x;
            this.y = y;
        }

    public getX():number
        {
            return this.x;
        }

    public getY():number
        {
            return this.y;
        }

    public setX(newX:number):void
    {
        this.x = newX;
    }

    public setY(newY:number):void
    {
        this.y = newY;
    }

    public toString():string
    {
    return `(${this.x},${this.y})`
    }

    public distanceTolOrigin():number
    {
        let A:number[] = [0,0];
        let B:number[] = [this.x, this.y];
        let distanceAB:number;
        distanceAB = Math.sqrt((B[0] - A[0])**2 + (B[1] - A[1])**2);
        return Number(distanceAB.toFixed(3));
    }

    public calculateDistance(anotherPoint:Point):number
    { 
        let x1 = this.x;
        let y1 = this.y;
        let x2 = anotherPoint.x
        let y2 = anotherPoint.y
        let distanceAB:number;
        distanceAB = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
        return Number(distanceAB.toFixed(3));
    }

    public calcularQuadrant():number
    {
        let quadrant:number = 0;
       if(this.x == 0 || this.y == 0)
        {
            quadrant = 0;
        }

       if(this.x > 0 && this.y > 0)
        {
            quadrant = 1;
        }

       if(this.x < 0 && this.y > 0)
        {
            quadrant = 2;
        }

       if(this.x < 0 && this.y < 0)
        {
            quadrant = 3;
        }

       if(this.x > 0 && this.y < 0)
        {
            quadrant = 4;
        }

       return quadrant
    }

};


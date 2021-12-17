class Details{
    private productId:number;
    private productName:string;
    private unitPrice:number;
    private qty:number;

    constructor(productId:number){
        this.productId=productId;
    }
    public get ProductId():number{
        return this.productId;
    }
    
    // public get ProductName():string{
    //     return this.productName;
    // }
    public set ProductName(value:string){
        this.productName=value;
    }
    public get UnitPrice():number{
        return this.unitPrice;
    }
    public set UnitPrice(value:number){
        this.unitPrice=value;
    }
    public get Qty():number{
        return this.qty;
    }
    public set Qty(value:number){
        this.qty=value;
    }
    
    public ShowDetails():void{
        console.log(`ProductId:${this.productId} ProductName: ${this.productName} UnitPrice: ${this.unitPrice} Quantity: ${this.qty}`)
    }
}
var show:Details=new Details(13);
show.ProductName="Table"
show.UnitPrice=10000;
show.Qty=18;
show.ShowDetails();
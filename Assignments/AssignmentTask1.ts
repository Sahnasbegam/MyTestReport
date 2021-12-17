class Product{
    cust_id:number;
    cust_name:string;
    cust_place:string;
    constructor(cust_id:number=1,cust_name:string="Sahana",cust_place:string="TN"){
        this.cust_id=cust_id;
        this.cust_name=cust_name;
        this.cust_place=cust_place;
    }
    public ShowDetails():void{
        console.log(`Customer ID: ${this.cust_id} Customer Name: ${this.cust_name} Customer Place: ${this.cust_place}`)
    }
}
let product:Product=new Product();
product.ShowDetails();
let product1:Product=new Product(10256);
product1.ShowDetails();
let product2:Product=new Product(10256, "Scott");
product2.ShowDetails();
let product3:Product=new Product(10256, "Scott", "Hyd");
product3.ShowDetails();


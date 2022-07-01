import { Product } from "./product.model";

export class SimpleDataSource{
    private products:Product[]=[];

    constructor(){
        this.products = new Array<Product>(
            new Product(1,"Galaxy M31","Best phone","1.jpg"),
            new Product(2,"Galaxy M32","Best phone","2.jpg"),
            new Product(3,"Galaxy M33","Best phone","3.jpg"),
            new Product(4,"Galaxy M34","Best phone","4.jpg"),
            new Product(5,"Galaxy M35","Best phone","5.jpg")
        )
    }

    getProducts():Product[]{
        return this.products;
    }
}
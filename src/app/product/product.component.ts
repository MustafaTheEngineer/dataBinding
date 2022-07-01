import { Component} from '@angular/core';
import { Product } from '../product.model';
import { ProductRepository } from '../repository.model';

@Component({
  selector: 'app',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  model: ProductRepository = new ProductRepository();
  product ?:Product = this.model.getProductById(1);
  disabled = true;

  constructor() { }

  getClasses(id:number):string{
    let product = this.model.getProductById(id);
    if(product?.id){
      return (product.id < 5 ? "bg-info" : "bg-secondary") + " m-2 p-2";
    }
    else
      return " bg-danger m-2 p-2";
      
  }

  getClassMap(id:number):Object{
    let product = this.model.getProductById(id);
    if(product?.id)
      return {
        "bg-success": product?.id < 5,
        "bg-secondary" : product?.name == "Galaxy M34",
    }
      else 
        return {}
  }

}

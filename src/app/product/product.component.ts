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

  color:string = "red";

  getStyles(id:number):Object{
    return {
      fontSize : "25px",
      fontFamily: "Georgia, 'Times New Roman', Times, serif",
      margin: "20px"
    }
  }

  onSubmit($event:MouseEvent){
    $event.stopPropagation();
    console.log($event);
  }

  onDivClicked($event:MouseEvent){
    console.log($event);
    console.log('div was clicked');
  }

  onKeyUp($event:KeyboardEvent){
    if($event.key === 'Enter'){
      console.log('Enter was pressed');
    }
  }
  onKeyUpEnter(){
      console.log('Enter was pressed');
  }

}

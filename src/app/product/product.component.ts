import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MerchantService } from '../merchant.service';
import { Product } from '../Producttypescript';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product= new Product();
  products: Product[] | undefined;
  
  constructor(private merchantservice: MerchantService,
    private router: Router) { }

  ngOnInit(): void {
    this.goAllProducts();
  }


  saveProduct(){
    this.merchantservice.createProduct(this.product).subscribe( data =>{
      console.log(data);
     this.goAllProducts();
    },
    error => console.log(error));
  }
   deleteProduct(id: number){
    this.merchantservice.deleteProduct(id).subscribe( data => {
      console.log(data);
      this.goAllProducts();
    })
   }

  goAllProducts(){
    this.merchantservice.getAllProducts().subscribe(data => {
      this.products = data;
    }); 
  }
  
  onSubmit(){
    console.log(this.product);
    this.saveProduct();
  }
}

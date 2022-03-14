import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category';
import { MerchantService } from '../merchant.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  category:Category= new Category();
  categories: Category[] | undefined;
  
  constructor(private merchantservice: MerchantService,
    private router: Router) { }

  ngOnInit(): void {
    this.goAllCategories();
  }


  saveCategory(){
    this.merchantservice.createCategory(this.category).subscribe( data =>{
      console.log(data);
     this.goAllCategories();
    },
    error => console.log(error));
  }
   deleteCategory(id: number){
    this.merchantservice.deleteCategory(id).subscribe( data => {
      console.log(data);
      this.goAllCategories();
    })
   }
  goToCategoryList(){
    this.router.navigate(['/merchant/category']);
  }
  goAllCategories(){
    this.merchantservice.getAllCategories().subscribe(data => {
      this.categories = data;
    }); 
  }
  
  onSubmit(){
    console.log(this.category);
    this.saveCategory();
  }
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BuyerComponent } from './buyer/buyer.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ProductComponent } from './product/product.component';
import { SignupComponent } from './signup/signup.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path:'', redirectTo:'',pathMatch:'full'},
  {path:'admin/signup', component: SignupComponent},
  {path:'login', component: LoginComponent},
  {path:'admin', component: AdminComponent},
  {path:'home', component: HomeComponent},
  {path:'buyer', component: BuyerComponent},
  {path:'merchant', component: MerchantComponent},
  {path:'merchant/category', component: CategoryComponent},
  {path:'merchant/product', component: ProductComponent},
  {path:'admin/userlist',component: UserlistComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

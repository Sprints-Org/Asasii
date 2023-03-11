import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCategoryComponent } from './components/admin-category/admin-category.component';
import { AdminOrderComponent } from './components/admin-order/admin-order.component';
import { AdminProductComponent } from './components/admin-product/admin-product.component';
import { AdminUserComponent } from './components/admin-user/admin-user.component';
import { AboutComponent } from './components/about/about.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FilterComponent } from './components/filter/filter.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { AddCategoryComponent } from './components/add-category/add-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'shop', component: FilterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: 'detail/:id', component:ProductDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {path: 'profile/:id', component:ProfileComponent},
  {path: 'add-product', component: AddProductComponent},
  {path: 'edit-product/:id', component: EditProductComponent},
  {path: 'add-category', component: AddCategoryComponent},
  {path: 'edit-category/:id', component: EditCategoryComponent},
  {path: 'admin-product', component: AdminProductComponent},
  {path: 'admin-category', component: AdminCategoryComponent},
  {path: 'admin-order', component: AdminOrderComponent},
  {path: 'admin-user', component: AdminUserComponent},
  {path: 'myprofile/:id', component: CustomerProfileComponent},
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

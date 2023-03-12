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
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  { path: 'shop', component: FilterComponent },
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent,canActivate: [AuthGuard]},
  { path: 'detail/:id', component:ProductDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  {path: 'profile/:id', component:ProfileComponent,canActivate: [AuthGuard]},
  {path: 'add-product', component: AddProductComponent,canActivate: [AuthGuard]},
  {path: 'edit-product/:id', component: EditProductComponent,canActivate: [AuthGuard]},
  {path: 'add-category', component: AddCategoryComponent,canActivate: [AuthGuard]},
  {path: 'edit-category/:id', component: EditCategoryComponent,canActivate: [AuthGuard]},
  {path: 'admin-product', component: AdminProductComponent,canActivate: [AuthGuard]},
  {path: 'admin-category', component: AdminCategoryComponent,canActivate: [AuthGuard]},
  {path: 'admin-order', component: AdminOrderComponent,canActivate: [AuthGuard]},
  {path: 'admin-user', component: AdminUserComponent,canActivate: [AuthGuard]},
  {path: 'myprofile/:id', component: CustomerProfileComponent,canActivate: [AuthGuard]},
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

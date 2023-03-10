import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-comonent/app.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';
import { FilterComponent } from './components/filter/filter.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FeaturesComponent } from './components/layouts/features/features.component';
import { ProductComponent } from './components/layouts/product/product.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { CartTableComponent } from './components/cart-table/cart-table.component';
import { CartTotalComponent } from './components/cart-total/cart-total.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { AdminCategoryComponent } from './admin-category/admin-category.component';
import { AdminOrderComponent } from './admin-order/admin-order.component';
import { AdminUserComponent } from './admin-user/admin-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponentComponent,
    FilterComponent,
    CartComponent,
    CheckoutComponent,
    LoginComponent,
    AboutComponent,
    ProductDetailsComponent,
    ProfileComponent,
    FeaturesComponent,
    ProductComponent,
    AddProductComponent,
    CartTableComponent,
    CartTotalComponent,
    AdminProductComponent,
    AdminCategoryComponent,
    AdminOrderComponent,
    AdminUserComponent
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

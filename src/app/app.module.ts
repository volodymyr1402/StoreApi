import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import {HttpClientModule} from '@angular/common/http';
import { LogInComponent } from './components/log-in/log-in.component';
import { ModalComponent } from './components/modal/modal.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchingProductsPipe } from './pipes/searching-products.pipe';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SmartphonesComponent } from './pages/smartphones/smartphones.component';
import { CategoryProductsPipe } from './pipes/category-products.pipe';
import { LaptopsComponent } from './pages/laptops/laptops.component';
import { FragrancesComponent } from './pages/fragrances/fragrances.component';
import { SkincareComponent } from './pages/skincare/skincare.component';
import { GroceriesComponent } from './pages/groceries/groceries.component';
import { HomeDecorationComponent } from './pages/home-decoration/home-decoration.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LogInComponent,
    ModalComponent,
    SearchingProductsPipe,
    ProductPageComponent,
    AboutPageComponent,
    NavigationComponent,
    SmartphonesComponent,
    CategoryProductsPipe,
    LaptopsComponent,
    FragrancesComponent,
    SkincareComponent,
    GroceriesComponent,
    HomeDecorationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

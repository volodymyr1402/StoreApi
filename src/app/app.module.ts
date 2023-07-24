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

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    LogInComponent,
    ModalComponent,
    SearchingProductsPipe

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

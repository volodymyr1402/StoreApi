import { Component, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';
import { ProductPageComponent } from './pages/product-page/product-page.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {

  inputSearch = '';
  urlGh='https://github.com/'
  urlIg='https://www.instagram.com/'

constructor(public modalService:ModalService){}

linkGit(){
  location.href=this.urlGh;
}
linkIg(){
  location.href=this.urlIg;
}

}

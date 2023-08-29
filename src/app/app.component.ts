import { Component, OnInit } from '@angular/core';
import { ModalService } from './services/modal.service';
import { Title } from '@angular/platform-browser'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {

  inputSearch = '';
  urlGh='https://github.com/'
  urlIg='https://www.instagram.com/'

constructor(public modalService:ModalService,private title:Title){}

linkGit(){
  location.href=this.urlGh;
}
linkIg(){
  location.href=this.urlIg;
}

ngOnInit(): void {
  this.title.setTitle("Your new store")
}
}

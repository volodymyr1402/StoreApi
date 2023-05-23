import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { ModalService } from 'src/app/services/modal.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {

  form = new FormGroup({
    username: new FormControl<string>(''),
    password: new FormControl<string>('')
  });


constructor(public modalService:ModalService,
            private productService:ProductsService){}


submit(){
      this.productService.auth({
        username: this.form.value.username as string,
        password: this.form.value.password as string
      }).subscribe(()=>{this.modalService.close})
      console.log(this.form.value)

    }
}

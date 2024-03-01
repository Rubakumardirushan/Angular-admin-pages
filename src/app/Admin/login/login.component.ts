import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';
import { AuthuserviceService } from '../../services/authuservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
errormessage:string='';
  loginform!: FormGroup;
constructor(private lgf: FormBuilder ,private auth: AuthuserviceService ,private route: Router){}
 ngOnInit(): void {
    this.loginform = this.lgf.group({
      username: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required)
    });
 }

 submit(){


 const value:boolean=this.auth.isLoggedIn(this.loginform.value.username,this.loginform.value.password);
if(value==false){
this.errormessage=this.auth.altertext;
this.loginform.reset();

}


 }
}

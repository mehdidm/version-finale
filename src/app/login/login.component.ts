import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { $ } from 'protractor';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide =true;
  id:string;
  password:string;
  errorMessage:string="Wrong password";
  color="warn";
  constructor(private router:Router) { }
  getErrorMessage(pass:string) {
    if (pass!="admin") {
      return true;
    }
  return false;
  }
  onSubmit(form:NgForm){
    console.log(this.id);
    console.log(this.password);
    if (this.id=="admin" && this.password=="admin") {
      this.router.navigate(['/Main']);
    }else{
    }
  }
  

  ngOnInit() {
  }

}

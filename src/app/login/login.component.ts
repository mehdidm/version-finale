import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { $ } from 'protractor';
//import { DynamicScriptLoaderService } from '../dynamic-script-loader.service';

//declare const backgroundAnimation:any;

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
  constructor(private router:Router /*, private dynamicScriptLoader: DynamicScriptLoaderService */) { }
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
  
backgroundAnimation:string="backgroundAnimation";
  ngOnInit() {
      // Just call your load scripts function with scripts you want to load
    //  this.loadScripts();
    //backgroundAnimation();
  }/*
  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('backgroundAnimation').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
*/

}

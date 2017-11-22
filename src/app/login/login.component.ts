import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginFormRef: NgForm;

  constructor(private location: Location) { }

  ngOnInit() {
  }
  onLogin() {
  	console.error(this.loginFormRef);
  }

  back(){
  	this.location.back();
  }

}

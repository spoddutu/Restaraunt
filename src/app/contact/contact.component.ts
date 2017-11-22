import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;

  constructor() { }

  ngOnInit() {
  	this.feedbackForm = new FormGroup({
  		'firstname': new FormControl(),
  		'lastname': new FormControl(),
  		'phone': new FormControl(),
  		'email': new FormControl(),
  		'agree': new FormControl(),
  		'contacttype': new FormControl(),
  		'comments': new FormControl()
  	});
  }

}

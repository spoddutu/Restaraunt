import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  feedbackForm: FormGroup;
  formErrors: any;
  validationMessages: any;

  constructor() { }

  ngOnInit() {
  	this.feedbackForm = new FormGroup({
  		'firstname': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
  		'lastname': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
  		'phone': new FormControl('', [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]), 
  		'email': new FormControl('', [Validators.required, Validators.email]),
  		'agree': new FormControl(),
  		'contacttype': new FormControl({value: null, disabled: true}),
  		'comments': new FormControl()
  	});

  	this.formErrors = {
  		'firstname': '',
  		'lastname': '',
  		'phone': '',
  		'email': ''
  	};

  	this.validationMessages = {
	    'firstname': {
	      'required':      'First Name is required.',
	      'minlength':     'First Name must be at least 2 characters long.',
	      'maxlength':     'FirstName cannot be more than 25 characters long.'
	    },
	    'lastname': {
	      'required':      'Last Name is required.',
	      'minlength':     'Last Name must be at least 2 characters long.',
	      'maxlength':     'Last Name cannot be more than 25 characters long.'
	    },
	    'phone': {
	      'required':      'Phone number is required.',
	      'pattern':       'Phone number must contain only numbers.'
	    },
	    'email': {
	      'required':      'Email is required.',
	      'email':         'Email not in valid format.'
	    },
	};

	this.feedbackForm.valueChanges.subscribe(data => {
		this.onValueChanged(data);
	});
	this.onValueChanged();
  }

  onValueChanged(data?: any) {
  	if(!this.feedbackForm) return;
  	const form = this.feedbackForm;
  	for(const field in this.formErrors) {
  		this.formErrors[field] = '';
  		const control = form.get(field);
  		if(control && control.dirty && !control.valid) {
  			const messages = this.validationMessages[field];
  			for(const key in control.errors) {
  				this.formErrors[field] = messages[key] + ' ';
  			}
  		}
  	}
  }

  onChange() {
  	if(this.feedbackForm.controls.agree.value){
  		this.feedbackForm.controls.contacttype.enable();
  	}
  	else {
  		this.feedbackForm.controls.contacttype.disable();
  	}
  }

  onSubmit() {
  	console.log(this.feedbackForm);
  	// this.feedbackForm.reset();
  }

}

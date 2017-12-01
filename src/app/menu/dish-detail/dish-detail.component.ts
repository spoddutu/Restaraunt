import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { MenuService } from '../menu.service';

import { Dish } from '../../shared/dish.model';
import { Comment } from '../../shared/comment.model';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  dish: Dish;
  commentForm: FormGroup;
  formErrors: any;
  validationMessages: any;

  constructor(private activatedRoute: ActivatedRoute, private menuService: MenuService,
  	private location :Location, @Inject('BaseURL') private baseURL) { 
    console.error(baseURL);
  }

  ngOnInit() {
  	this.activatedRoute.params.subscribe((params: ParamMap) => {
  		this.menuService.getDish(+params['id']).subscribe(dish => this.dish = dish);
  	});

    this.formErrors = {
      'author': '',
      'comment': ''
    };

    this.validationMessages = {
      'author': {
        'required': 'Author is required',
        'minlength': 'Author must be at least 2 characters long.',
        'maxlength': 'Author cannot be more than 25 characters long.'        
      },
      'comment': {
        'required': 'Comment is required',
      }
    };

  	this.commentForm = new FormGroup({
  		'author': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
  		'rating': new FormControl(),
  		'comment': new FormControl('', Validators.required)
  	});

    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data))
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if(!this.commentForm) return;
    const form = this.commentForm;
    for(const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if(control && control.dirty && control.invalid) {
        const messages = this.validationMessages[field];
        for(const key in control.errors) {
          this.formErrors[field] = messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    const  comment = new Comment();
    comment.author = this.commentForm.get('author').value;
    comment.comment = this.commentForm.get('comment').value;
    comment.rating = this.commentForm.get('rating').value;
    comment.date = new Date().toString();
    this.dish.comments.push(comment);
    this.commentForm.reset();

  }

  getId(isPrev) {
  	if(isPrev && this.dish.id > 0){
  		return this.dish.id - 1;
  	}
  	return this.dish.id + 1;
  }

  back() {
  	this.location.back();
  }

}

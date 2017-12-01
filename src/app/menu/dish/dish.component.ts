import { Component, OnInit, Input, Inject } from '@angular/core';

import { Dish } from  '../../shared/dish.model';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {

  @Input() dish: Dish;	

  constructor(@Inject('BaseURL') private baseURL) { }

  ngOnInit() {
  }

}

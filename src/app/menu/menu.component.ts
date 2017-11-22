import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish.model';

import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  dishes: Dish[];	
  selectedDish: Dish;
  
  constructor(private menuService: MenuService) { }

  ngOnInit() {
  	this.dishes = this.menuService.getDishes();
  	this.selectedDish = this.dishes[0];
  }

  doClick(dish: Dish) {
  	this.selectedDish = dish;
  }

}

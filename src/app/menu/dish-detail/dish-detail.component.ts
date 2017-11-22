import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { MenuService } from '../menu.service';

import { Dish } from '../../shared/dish.model';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  dish: Dish;

  constructor(private activatedRoute: ActivatedRoute, private menuService: MenuService,
  	private location :Location) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe((params: ParamMap) => this.dish = this.menuService.getDish(+params['id']));
  }

  back() {
  	this.location.back();
  }

}

import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish.model';
import { Promotion } from '../shared/promotion.model';
import { LeaderShip } from  '../shared/leadership.model';

import { MenuService } from '../menu/menu.service';
import { PromotionService } from '../promotion.service';
import { LeadershipService } from '../leadership.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  dish: Dish;
  promotion: Promotion;
  leader: LeaderShip;

  constructor(private menuService: MenuService, private promotionService: PromotionService,
  	private leadershipService: LeadershipService, @Inject("BaseURL") private baseURL) { }

  ngOnInit() {
  	this.menuService.getFeaturedDish().subscribe((dish: Dish[]) => this.dish = dish[0]);
  	this.promotion = this.promotionService.getFeaturedPromotion();
  	this.leader = this.leadershipService.getFeaturedLeader();
  }

}

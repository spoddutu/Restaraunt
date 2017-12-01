import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { baseURL } from '../shared/baseurl';

import { Dish } from '../shared/dish.model';

@Injectable()
export class MenuService {

  constructor(private http: HttpClient) { }

  getDishes() {
  	return this.http.get<Dish[]>(baseURL + 'dishes');
  }

  getDish(id: number) {
  	return this.http.get<Dish>(baseURL + 'dishes/' + id);
  }

  getFeaturedDish() {
  	return this.http.get<Dish[]>(baseURL + 'dishes?featured=true');
  }

}

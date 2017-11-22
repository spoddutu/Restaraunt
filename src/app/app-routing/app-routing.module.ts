import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home.component';
import { AboutComponent } from  '../about/about.component';
import { MenuComponent } from '../menu/menu.component';
import { ContactComponent } from '../contact/contact.component';
import { DishDetailComponent } from '../menu/dish-detail/dish-detail.component';

const appRoutes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full'},
	{ path: 'login', component: LoginComponent},
	{ path: 'home', component: HomeComponent},
	{ path: 'about', component: AboutComponent},
	{ path: 'menu', component: MenuComponent},
	{ path: 'dishdetail/:id', component: DishDetailComponent},
	{ path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { MenuComponent } from './menu/menu.component';
import { DishDetailComponent } from './menu/dish-detail/dish-detail.component';
import { DishComponent } from './menu/dish/dish.component';
import { DishCommentsComponent } from './menu/dish-comments/dish-comments.component';

import { MenuService } from './menu/menu.service';
import { PromotionService } from './promotion.service';
import { LeadershipService } from './leadership.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    DishDetailComponent,
    DishComponent,
    DishCommentsComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [MenuService, PromotionService, LeadershipService],
  bootstrap: [AppComponent]
})
export class AppModule { }

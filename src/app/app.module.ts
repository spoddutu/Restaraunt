import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { DropdownDirective } from './shared/dropdown.directive';

import { CachingInterceptor } from './shared/caching.interceptor';
import { baseURL } from './shared/baseurl';
import { HighlightDirective } from './directives/highlight.directive';

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
    LoginComponent,
    DropdownDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    MenuService, 
    PromotionService, 
    LeadershipService,
    // { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
    { provide: 'BaseURL', useValue: baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

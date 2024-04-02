import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { WeekTrendingComponent } from './components/week-trending/week-trending.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CategoriesComponent,
    WeekTrendingComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[NavbarComponent,CarouselComponent,CategoriesComponent,HomeComponent,FooterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

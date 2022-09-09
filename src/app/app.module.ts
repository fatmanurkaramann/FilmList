import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { GenreComponent } from './components/genre/genre.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from './components/carousel/carousel.module';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
  declarations: [AppComponent, HomeComponent, MenuComponent, GenreComponent, SignUpComponent, LoginComponent,  SliderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CarouselModule
  ],
  providers: [
    {provide:"filmUrl",useValue:" https://moviesminidatabase.p.rapidapi.com/",multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {

}

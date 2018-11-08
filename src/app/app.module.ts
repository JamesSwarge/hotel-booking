import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { RoomsComponent } from './accomodation/rooms/rooms.component';
import { FoodAndBeveragesComponent } from './food-and-beverages/food-and-beverages.component';
import { RestaurantsComponent } from './food-and-beverages/restaurants/restaurants.component';
import { BarsComponent } from './food-and-beverages/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { SpaComponent } from './lifestyle/spa/spa.component';
import { ResortsActivitiesComponent } from './lifestyle/resorts-activities/resorts-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcrusionsComponent } from './lifestyle/excrusions/excrusions.component';
import { ToursComponent } from './lifestyle/tours/tours.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { IndianWeddingsComponent } from './weddings/indian-weddings/indian-weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodAndBeveragesComponent,
    RestaurantsComponent,
    BarsComponent,
    LifestyleComponent,
    SpaComponent,
    ResortsActivitiesComponent,
    ExperiencesComponent,
    ExcrusionsComponent,
    ToursComponent,
    WeddingsComponent,
    WesternWeddingsComponent,
    ThaiWeddingsComponent,
    IndianWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

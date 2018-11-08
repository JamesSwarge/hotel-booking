import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

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
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { from } from 'rxjs';

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
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

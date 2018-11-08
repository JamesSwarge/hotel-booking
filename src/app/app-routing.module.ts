import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { FoodAndBeveragesComponent } from './food-and-beverages/food-and-beverages.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';

const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'food-and-beverages', component: FoodAndBeveragesComponent },
  { path: 'celebrations', component: CelebrationsComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

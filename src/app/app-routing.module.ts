import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontpageComponent } from './myComponent/frontpage/frontpage.component';

import { NavbarComponent } from './myComponent/navbar/navbar.component';
import { CarouselComponent } from './myComponent/carousel/carousel.component';
import { AboutComponent } from './myComponent/about/about.component';
import { FacilityComponent } from './myComponent/facility/facility.component';
import { SponsorsComponent } from './myComponent/sponsors/sponsors.component';
import { FooterComponent } from './myComponent/footer/footer.component';
import { DetailsComponent } from './myComponent/details/details.component';
import { RegistrationComponent } from './myComponent/registration/registration.component';
import { SportsRegComponent } from './myComponent/sports-reg/sports-reg.component';





import { LoginComponent } from './myComponent/login/login.component';

import { SignupComponent } from './myComponent/signup/signup.component';
import { GalleryComponent } from './imgGall/gallery/gallery.component';






const routes: Routes = [

  { path: '', component: FrontpageComponent },
  { path: 'login', component: LoginComponent },
  {path: 'signup', component:SignupComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'details',component:DetailsComponent},
  {path:'registration',component: RegistrationComponent},
  {path:'sports-reg',component:  SportsRegComponent }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }


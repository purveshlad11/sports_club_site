import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './myComponent/carousel/carousel.component';
import { AboutComponent } from './myComponent/about/about.component';
import { FullAboutComponent } from './myComponent/full-about/full-about.component';
import { FacilityComponent } from './myComponent/facility/facility.component';
import { SponsorsComponent } from './myComponent/sponsors/sponsors.component';
import { FooterComponent } from './myComponent/footer/footer.component';
import { NavbarComponent } from './myComponent/navbar/navbar.component';
import { LoginComponent } from './myComponent/login/login.component';

import { SignupComponent } from './myComponent/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryComponent } from './imgGall/gallery/gallery.component';
import { FrontpageComponent } from './myComponent/frontpage/frontpage.component';
import { RegistrationComponent } from './myComponent/registration/registration.component';
import { DetailsComponent } from './myComponent/details/details.component';
import { SportsRegComponent } from './myComponent/sports-reg/sports-reg.component';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    AboutComponent,
    FullAboutComponent,
    FacilityComponent,
    SponsorsComponent,
    FooterComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    GalleryComponent,
    FrontpageComponent,
    RegistrationComponent,
    DetailsComponent,
    SportsRegComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

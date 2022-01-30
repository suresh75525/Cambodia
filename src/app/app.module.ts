import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './link/home/home/home.component';





import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Material.... */

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
/* Form-field */
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from 'kalaimagal/src/app/link/login/login/login.component';


/*Mobiscroll library */
import {MbscModule} from '@mobiscroll/angular-lite';
import { PictureComponent } from './picture/picture.component';
import { CarouselComponent } from './carousel/carousel.component';

import { TouristComponent } from './link/tourist/tourist.component';
import { TravelComponent } from './link/travel/travel.component';
import { FeativalsComponent } from './link/feativals/feativals.component';
import { PhotoComponent } from './link/photo/photo.component';
import { ForeignComponent } from './link/foreign/foreign.component';
import { CambodianComponent } from './link/cambodian/cambodian.component';
import { UsefullinkComponent } from './link/usefullink/usefullink.component';
import { DownloadComponent } from './link/download/download.component';
import { NewsComponent } from './link/news/news.component';
import { AboutComponent } from './link/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,


    HomeComponent,
  
    LoginComponent,
  
    PictureComponent,
    CarouselComponent,

    TouristComponent,
    TravelComponent,
    FeativalsComponent,
    PhotoComponent,
    ForeignComponent,
    CambodianComponent,
    UsefullinkComponent,
    DownloadComponent,
    NewsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatInputModule,
FlexLayoutModule,
ReactiveFormsModule,
MatCardModule,
MatCheckboxModule,
MatToolbarModule,
MatSelectModule,
MatRadioModule,
MbscModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

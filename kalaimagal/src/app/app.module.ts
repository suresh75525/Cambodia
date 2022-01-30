import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './link/home/home/home.component';
import { AboutComponent } from './link/about/about/about.component';

import { AchievementsComponent } from './link/achievements/achievements/achievements.component';
import { AdmissionComponent } from './link/admission/admission/admission.component';
import { ActivitiesComponent } from './link/activities/activities/activities.component';
import { AcademicComponent } from './link/academic/academic/academic.component';
import { KhokhoComponent } from './link/games/khokho/khokho/khokho.component';
import { VolleyballComponent } from './link/games/volleyball/volleyball/volleyball.component';
import { AthleticsComponent } from './link/games/athletics/athletics/athletics.component';
import { KabaadiComponent } from './link/games/kabaadi/kabaadi/kabaadi.component';

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
import { LoginComponent } from './link/login/login/login.component';
import { RegisterComponent } from './link/register/register/register.component';

/*Mobiscroll library */
import {MbscModule} from '@mobiscroll/angular-lite';
import { PictureComponent } from './picture/picture.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AchievementsComponent,
    ActivitiesComponent,
    AdmissionComponent,
    AcademicComponent,
    HomeComponent,
    AthleticsComponent,
    KabaadiComponent,
    KhokhoComponent,
    VolleyballComponent,
    LoginComponent,
    RegisterComponent,
    PictureComponent
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

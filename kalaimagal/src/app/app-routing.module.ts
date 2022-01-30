import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './link/home/home/home.component';
import { AboutComponent } from './link/about/about/about.component';
import { AcademicComponent } from './link/academic/academic/academic.component';
import { ActivitiesComponent } from './link/activities/activities/activities.component';
import { AdmissionComponent } from './link/admission/admission/admission.component';
import { AchievementsComponent } from './link/achievements/achievements/achievements.component';
import { KhokhoComponent } from './link/games/khokho/khokho/khokho.component';
import { VolleyballComponent } from './link/games/volleyball/volleyball/volleyball.component';
import { AthleticsComponent } from './link/games/athletics/athletics/athletics.component';
import { KabaadiComponent } from './link/games/kabaadi/kabaadi/kabaadi.component';
import { LoginComponent } from './link/login/login/login.component';
import { RegisterComponent } from './link/register/register/register.component';

const routes: Routes = [
  { path:'home', component:HomeComponent },
  { path:'about', component:AboutComponent },
  { path:'academic', component:AcademicComponent },
  { path:'achievements', component:AchievementsComponent },
  { path:'admission', component:AdmissionComponent },
  { path:'activities', component:ActivitiesComponent },
  { path:'khokho', component:KhokhoComponent },
  { path:'volleyball', component:VolleyballComponent },
  { path:'athletics', component:AthleticsComponent },
  { path:'kabaadi', component:KabaadiComponent },
  { path:'login', component:LoginComponent },
  { path:'register', component:RegisterComponent },
  
  { path:'', redirectTo:'/home', pathMatch:'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

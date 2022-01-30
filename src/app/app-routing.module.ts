import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './link/home/home/home.component';
import { CambodianComponent } from './link/cambodian/cambodian.component';
import { DownloadComponent } from './link/download/download.component';
import { FeativalsComponent } from './link/feativals/feativals.component';
import { LoginComponent } from 'kalaimagal/src/app/link/login/login/login.component';
import { NewsComponent } from './link/news/news.component';
import { PhotoComponent } from './link/photo/photo.component';
import { TouristComponent } from './link/tourist/tourist.component';
import { TravelComponent } from './link/travel/travel.component';
import { UsefullinkComponent } from './link/usefullink/usefullink.component';
import { AboutComponent } from './link/about/about.component';
import { ForeignComponent } from './link/foreign/foreign.component';

const routes: Routes = [

  { path:'home', component:HomeComponent },
  { path:'cambodian', component:CambodianComponent },
  { path:'download', component:DownloadComponent },
  { path:'festival', component:FeativalsComponent },
  { path:'news', component:NewsComponent },
  { path:'photo', component:PhotoComponent },
  { path:'login', component:LoginComponent },
  { path:'tourist', component:TouristComponent },
  { path:'travel', component:TravelComponent },
  { path:'usefullink', component:UsefullinkComponent },
  {path:'about',component: AboutComponent},
  { path:'foreign', component:ForeignComponent },
  { path:'', redirectTo:'/home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

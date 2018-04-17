import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { DistanceComponent } from './components/distance/distance.component';
import { RateComponent } from './components/rate/rate.component';
import { SizeComponent } from './components/size/size.component';
import { DateComponent } from './components/date/date.component';
import { DistdescallComponent } from './components/distdescall/distdescall.component';
import { RatedescallComponent } from './components/ratedescall/ratedescall.component';
import { SizedescallComponent } from './components/sizedescall/sizedescall.component';
import { DatedescallComponent } from './components/datedescall/datedescall.component';
import { DistasceoneComponent } from './components/distasceone/distasceone.component';
import { DistdesconeComponent } from './components/distdescone/distdescone.component';
import { RatedesconeComponent } from './components/ratedescone/ratedescone.component';
import { RateasceoneComponent } from './components/rateasceone/rateasceone.component';
import { SizeasceoneComponent } from './components/sizeasceone/sizeasceone.component';
import { SizedesceoneComponent } from './components/sizedesceone/sizedesceone.component';
import { DatedesceoneComponent } from './components/datedesceone/datedesceone.component';
import { DateasceoneComponent } from './components/dateasceone/dateasceone.component';


//services
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {ProjectsService} from './services/projects.service';
import {DistanceService} from './services/distance.service';
import {RateService} from './services/rate.service';
import {SizeService} from './services/size.service';
import {DateService} from './services/date.service';
import {DistanceoneService} from './services/distanceone.service';
import {DateoneService} from './services/dateone.service';
import {RateoneService} from './services/rateone.service';
import {SizeoneService} from './services/sizeone.service';






const appRoutes: Routes = [
  {
    path:'',component:HomeComponent
  },
   {
    path:'register',component:RegisterComponent
  },
   {
    path:'home',component:HomeComponent
  },
  {
    path:'projects',component:ProjectsComponent
  },
  {
    path:'distance/asce/all',component:DistanceComponent
  },
  {
    path:'rate/asce/all',component:RateComponent
  },
  {
    path:'size/asce/all',component:SizeComponent
  },
  {
    path:'date/asce/all',component:DateComponent
  },
  {
    path:'distance/desc/all',component:DistdescallComponent
  },
   {
    path:'rate/desc/all',component:RatedescallComponent
  },
   {
    path:'size/desc/all',component:SizedescallComponent
  },
   {
    path:'date/desc/all',component:DatedescallComponent
  },
   {
    path:'distance/asce/one',component:DistasceoneComponent
  },
   {
    path:'distance/desc/one',component:DistdesconeComponent
  },
   {
    path:'rate/asce/one',component:RateasceoneComponent
  },
   {
    path:'rate/desc/one',component:RatedesconeComponent
  },
   {
    path:'size/asce/one',component:SizeasceoneComponent
  },
   {
    path:'size/desc/one',component:SizedesceoneComponent
  },
   {
    path:'date/desc/one',component:DatedesceoneComponent
  },
   {
    path:'date/asce/one',component:DateasceoneComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    ProjectsComponent,
    DistanceComponent,
    RateComponent,
    SizeComponent,
    DateComponent,
    DistdescallComponent,
    RatedescallComponent,
    SizedescallComponent,
    DatedescallComponent,
    DistasceoneComponent,
    DistdesconeComponent,
    RatedesconeComponent,
    RateasceoneComponent,
    SizeasceoneComponent,
    SizedesceoneComponent,
    DatedesceoneComponent,
    DateasceoneComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
  ValidateService,
  AuthService,
  ProjectsService,
  DistanceService,
  RateService,
  DateService,
  SizeService,
  SizeoneService,
  RateoneService,
  DateoneService,
  DistanceoneService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

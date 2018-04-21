import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule,MatSortModule } from '@angular/material';

//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { RooftableComponent } from './components/rooftable/rooftable.component';

//services
import { RoofService } from './services/roof.service';
import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';







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
    path:'sort',component:RooftableComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    HomeComponent,
    RooftableComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule

  ],
  providers: [
  ValidateService,
  AuthService,
  RoofService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

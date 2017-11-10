import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { route } from './app.route';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminmoviesComponent } from './adminmovies/adminmovies.component';
import { HttpModule } from '@angular/http';
import { SeriesService } from './app.service';
import { AdduserComponent } from './adduser/adduser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AdminmoviesComponent,
    AdduserComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route),
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [SeriesService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

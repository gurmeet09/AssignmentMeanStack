import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AdminmoviesComponent } from './adminmovies/adminmovies.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
export const route: Routes = [
  { path:  '', component:HomeComponent},
  { path: 'admin', component:AdminComponent},
  { path: 'adseries', component:AdminmoviesComponent},
  { path: 'user' , component:AdduserComponent},
  { path: 'login' , component:LoginComponent},
  { path: 'showuser' , component:UserComponent}
  ]

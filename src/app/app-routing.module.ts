import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountCreationComponent } from './feature/account-creation/account-creation.component';
import { LoginComponent } from './feature/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'devenir-membre', component: AccountCreationComponent },
  { path: 'connection', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

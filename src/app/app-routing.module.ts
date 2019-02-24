import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:"/userComponent",pathMatch:'full'},  
  {path: 'appComponent',component:AppComponent},
  {path: 'userComponent',component:UserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

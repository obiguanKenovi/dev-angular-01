import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Grafica01Component } from './pages/grafica01/grafica01.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const routes:Routes=[

  /*Rutas protegidas */
  {
    path:'',
    component:PagesComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'progress',component:ProgressComponent},
      {path:'grafica01',component:Grafica01Component},
      {path:'',redirectTo:'/dashboard',pathMatch:'full'},
    ]
  },
  

  /*rutas publicas */
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  
 // {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'**',component:NopagefoundComponent}

];




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }

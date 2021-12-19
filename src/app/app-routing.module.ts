import { NgModule } from '@angular/core';



/*Begin Modules */

import { PagesRoutingModule } from './pages/pages.routing';

/*End Modules */

import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';

/*Todo esto se centralizo en un archivo PagesRoutingModule */

// import { PagesComponent } from './pages/pages.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { Grafica01Component } from './pages/grafica01/grafica01.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes:Routes=[

  /*Rutas protegidas */
  // {
  //   path:'',
  //   component:PagesComponent,
  //   children:[
  //     {path:'dashboard',component:DashboardComponent},
  //     {path:'progress',component:ProgressComponent},
  //     {path:'grafica01',component:Grafica01Component},
  //     {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  //   ]
  // },

  /*Todo lo de arriba se encuentra en path:'dashboard' PagesRauting
  path: '/aut' AuthRouting */
  
  /*rutas publicas */
  // {path:'register',component:RegisterComponent},
  // {path:'login',component:LoginComponent},
  
 // {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'',redirectTo:'/dashboard',pathMatch:'full'},
  {path:'**',component:NopagefoundComponent}

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica01Component } from './grafica01/grafica01.component';



const routes: Routes = [
    {
        /*Ahora voy las rutas para que comiencen las hijas por dashboard */
        /* Un ejemplo serai en donde esta el path bacio seria ahora path: dashboard */
        path:'dashboard',
        component:PagesComponent,
        children:[
          {path:'',component:DashboardComponent},
          {path:'progress',component:ProgressComponent},
          {path:'grafica01',component:Grafica01Component},
        
        ]
      },
      
  

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}

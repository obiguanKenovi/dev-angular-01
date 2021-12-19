import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica01Component } from './grafica01/grafica01.component';
import { SharedModule } from '../shared/shared.module';

//Se debe importar el router ya que al crear  un modulo lo que hacemos es encapsular el codigo 
//pero al encapsularlo se pierde el router-outlet, se puede hacer importando el appRoutingModule o
//Importando el Router
// import { AppRoutingModule } from '../app-routing.module';

import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica01Component,
  ],
  exports:[
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica01Component,
  
  ],
  
  imports: [
    CommonModule,
    // AppRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }

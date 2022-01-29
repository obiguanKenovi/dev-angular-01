import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

/*Begin Modulos  */

import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

/*End Modulos*/

import { AppRoutingModule } from './app-routing.module';


//tet tst 

// import { LoginComponent } from './auth/login/login.component';
// import { RegisterComponent } from './auth/register/register.component';


// import { HeaderComponent } from './shared/header/header.component';
// import { SidebarComponent } from './shared/sidebar/sidebar.component';
// import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';


// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { Grafica01Component } from './pages/grafica01/grafica01.component';
// import { PagesComponent } from './pages/pages.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';



@NgModule({
  declarations: [
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent,

    // PagesComponent,
    // DashboardComponent,
    // ProgressComponent,
    // Grafica01Component,

    AppComponent,
    // LoginComponent,
    // RegisterComponent,
    NopagefoundComponent,
   
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

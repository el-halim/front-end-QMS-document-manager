import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

import {LoginComponent} from "./login/login.component";
import {CoUsersComponent} from "./co-users/co-users.component";
import {CoServicesComponent} from "./co-services/co-services.component";
import {CoProcessusComponent} from "./co-processus/co-processus.component";
import {CoDocumentsComponent} from "./co-documents/co-documents.component";
import {HomeComponent} from "./home/home.component";
import {UserGuardService as guard} from "./guards/user-guard.service";
import {GestionComponent} from "./gestion/gestion.component";
import {TestoComponent} from "./testo/testo.component";
import {ProfileviewComponent} from "./gestion/profileview/profileview.component";
import {ProfileditComponent} from "./gestion/profiledit/profiledit.component";
import {ContactComponent} from "./contact/contact.component";
import {AboutComponent} from "./about/about.component";
import {DetailProcessusComponent} from "./detail-processus/detail-processus.component";
import {DetailServiceComponent} from "./detail-service/detail-service.component";


const routes: Routes = [

  { path:"home", component: HomeComponent },



  { path:"nn", component: AppComponent },

  { path:"login", component: LoginComponent},

  { path:"contact", component: ContactComponent},
  { path:"about", component: AboutComponent},

  { path:"gestion", component: GestionComponent,
    canActivate: [guard], data: {expectedRole : ['admin','user','pilote']} ,
    children: [
      { path:"processus", component: CoProcessusComponent,
        canActivate: [guard], data: {expectedRole : ['admin' , 'user','pilote']} },
      { path:"documents",  component: CoDocumentsComponent,
        canActivate: [guard], data: {expectedRole : ['admin' , 'user','pilote']} },
      { path:"users", component: CoUsersComponent,
        canActivate: [guard], data: {expectedRole : ['admin','pilote']} },
      { path:"services", component: CoServicesComponent,
        canActivate: [guard], data: {expectedRole : ['admin', 'user','pilote']} },
      { path:"detailProcessus", component: DetailProcessusComponent ,
        canActivate: [guard], data: {expectedRole : ['admin','user','pilote']}},
      { path:"detailService", component: DetailServiceComponent ,
        canActivate: [guard], data: {expectedRole : ['admin','user','pilote']}},
      { path:"profileView", component: ProfileviewComponent ,
        canActivate: [guard], data: {expectedRole : ['admin','user','pilote']}},
      { path:"profileEdit", component: ProfileditComponent ,
        canActivate: [guard], data: {expectedRole : ['admin','user','pilote']}}

    ]
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { Error404Component } from './error404/error404.component';
import { MainComponent } from './main/main.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { SlectedProduitComponent } from './slected-produit/slected-produit.component';
import { AjouterComponent } from './ajouter/ajouter.component';
import {LoginComponent} from './login/login.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { EditerProduitComponent } from './editer-produit/editer-produit.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'Menu', component:MenuComponent},
  {path:'Ajouter', component:AjouterComponent},
  {path:'Main', component:MainComponent},
  {path:'slected-produit/:id', component:SlectedProduitComponent},
  {path:'list-produit', component:ListProduitComponent},
  {path:'contact', component:ContactComponent} ,
  {path:'EditProduit/:id', component:EditerProduitComponent} ,
 {path:'menu2', component:NavMenuComponent},
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'**', component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

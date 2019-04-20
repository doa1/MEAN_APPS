import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { EditComponent } from './edit/edit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
const ROUTES: Routes = [
   {path: '', redirectTo: '/home', pathMatch: 'full'},
   {path: 'home', component: HomeComponent },
   {path: 'navbar', component: NavbarComponent},
   {path: 'edit/:id', component: EditComponent },
   {path: 'show/:id', component: ShowComponent},
   {path: 'create', component: AddComponent},
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

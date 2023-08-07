import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReactiveformComponent } from './components/reactiveform/reactiveform.component';
import { TemplateformComponent } from './components/templateform/templateform.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'reactiveform', component:ReactiveformComponent},
  {path: 'templateform', component:TemplateformComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

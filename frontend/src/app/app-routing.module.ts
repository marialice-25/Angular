import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import  { AboutComponent } from './views/about/about.component';
import  { EletronicsComponent } from './views/eletronics/eletronics.component';
import  { EletronicsCreateComponent } from './components/eletronics/eletronics-create/eletronics-create.component';
import  { EletronicsUpdateComponent } from './components/eletronics/eletronics-update/eletronics-update.component';
import  { EletronicsDeleteComponent } from './components/eletronics/eletronics-delete/eletronics-delete.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "eletronics",
    component: EletronicsComponent,
  },
  {
    path: "eletronics/create",
    component: EletronicsCreateComponent,
  },
  {
    path: "eletronics/update/:id",
    component: EletronicsUpdateComponent,
  },
  {
    path: "eletronics/delete/:id",
    component: EletronicsDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

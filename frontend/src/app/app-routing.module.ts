import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import  { AboutComponent } from './views/about/about.component';
import  { EletronicsComponent } from './views/eletronics/eletronics.component';
import  { EletronicsCreateComponent } from './components/eletronics/eletronics-create/eletronics-create.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

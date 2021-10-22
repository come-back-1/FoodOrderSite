import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { ForcustomerComponent } from './forcustomer/forcustomer.component';
import { ForrestaurantComponent } from './forrestaurant/forrestaurant.component';
import { CommonModule } from '@angular/common';
import { ForhrmanagerComponent } from './forhrmanager/forhrmanager.component';

const routes: Routes = [
  {path:'footer', component:FooterComponent},
  {path:'forcustomer', component:ForcustomerComponent},
  {path:'forrestaurant', component:ForrestaurantComponent},
  {path:'forhrmanager', component:ForhrmanagerComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

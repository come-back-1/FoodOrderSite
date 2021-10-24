import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { ForcustomerComponent } from './forcustomer/forcustomer.component';
import { ForrestaurantComponent } from './forrestaurant/forrestaurant.component';
import { CommonModule } from '@angular/common';
import { ForhrmanagerComponent } from './forhrmanager/forhrmanager.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { OrderItemComponent } from './order-item/order-item.component';

const routes: Routes = [
  {path:'footer', component:FooterComponent},
  {path:'forcustomer', component:ForcustomerComponent},
  {path:'forrestaurant', component:ForrestaurantComponent},
  {path:'forhrmanager', component:ForhrmanagerComponent},
  {path:'edit/:id', component:EditItemComponent},
  {path:'order/:id', component:OrderItemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

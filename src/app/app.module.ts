import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutModule } from './layout/layout.module';
//import { MatOptionModule } from '@angular/material/core';
import { ForcustomerComponent } from './forcustomer/forcustomer.component';
import { ForrestaurantComponent } from './forrestaurant/forrestaurant.component';
import { AddItemDialogComponent } from './add-item-dialog/add-item-dialog.component';
import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
//import { MatSelectModule} from '@angular/material/select';
import { MatTabsModule} from '@angular/material/tabs';
import { MatTableModule} from "@angular/material/table"
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldControl, MatFormFieldModule, 
  MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ForhrmanagerComponent } from './forhrmanager/forhrmanager.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { DataTablesModule } from 'angular-datatables';
import { OrderItemComponent } from './order-item/order-item.component';
import { CustomOrderDialogComponent } from './custom-order-dialog/custom-order-dialog.component';
import { SearchfilterPipe } from './searchfilter.pipe'
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    ForcustomerComponent,
    ForrestaurantComponent,
    AddItemDialogComponent,
    ForhrmanagerComponent,
    EditItemComponent,
    OrderItemComponent,
    CustomOrderDialogComponent,
    SearchfilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,MatSidenavModule,
    HttpClientModule,
    FlexLayoutModule,
    MatIconModule,
    MatTabsModule,
    MatTableModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule,
    DataTablesModule,
    Ng2OrderModule,
    NgxPaginationModule,
  
    LayoutModule,
  ],
  entryComponents: [
    AddItemDialogComponent
  ],

  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
],
  bootstrap: [AppComponent]
})
export class AppModule { }

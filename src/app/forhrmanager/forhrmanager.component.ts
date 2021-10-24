import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Items } from '../Items';
import { ItemsService } from '../services/items.service';
//import { OrderNowDialogComponent } from '../order-now-dialog/order-now-dialog.component';
import { CustomOrderDialogComponent } from '../custom-order-dialog/custom-order-dialog.component';

export interface OrderData {
  headCount:string;
  itemQuantity:number;
}

export interface customDialogData {
  customOrderName:string;
 // foodPrice:number;
}


@Component({
  selector: 'app-forhrmanager',
  templateUrl: './forhrmanager.component.html',
  styleUrls: ['./forhrmanager.component.scss']
})
export class ForhrmanagerComponent implements OnInit {
 
  headCount!:string;
  itemQuantity!:number;

  customOrderName!:string;
  //foodPrice!:number;

  searchValue!: string;

  p:number = 1;

  openCustomDialog(): void {                                    //--------function for Add Dialog box------
    const dialogRef = this.dialog.open(CustomOrderDialogComponent, {
      width: '400px',
      data: {customOrderName: this.customOrderName}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.customOrderName = result;
    });
  }


  constructor(public dialog: MatDialog, private fooditem:ItemsService, private customorder:ItemsService) { }
  itemMenu: Items[] | any ; 

  ngOnInit(): void {
    this.fooditem.getAllFooditemsToOrder().subscribe((allData)=>  //-------------
    { 
      this.itemMenu = allData;
      },

      (error)=>
      {
        console.log("Error Occured: " +error);                        //displays error on console when data fails to get stored
      }  
    )
  }


//----------for sorting item id
  key:string = 'id';
  reverse: boolean = false;

  sort(key: string){
    this.key = key;
    this.reverse = !this.reverse;
  }

}


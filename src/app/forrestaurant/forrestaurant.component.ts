import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Items } from '../Items';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';
import { ItemsService } from '../services/items.service';
import { Orders } from '../orders';
import { CustomOrders } from '../customorder';

export interface DialogData {
  foodName:string;
  foodPrice:number;
}

@Component({
  selector: 'app-forrestaurant',
  templateUrl: './forrestaurant.component.html',
  styleUrls: ['./forrestaurant.component.scss']
})

export class ForrestaurantComponent implements OnInit{

  foodName!:string;
  foodPrice!:number;

  p:number =1;


/*
  openEditDialog(id:any){
    this.fooditem.editFoodItem(id).subscribe((result) => {
      console.log(result)
    })

    const dialogRef = this.dialog.open(EditItemDialogComponent, {
      width: '400px',
      data: { edit_food_name:this.edit_food_name, edit_food_price:this.edit_food_price}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.edit_food_name = result;
      this.edit_food_price = result;
    })
  }
  */

  openDialog(): void {                                    //--------function for Add Dialog box------
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      width: '400px',
      data: {foodName: this.foodName, foodPrice: this.foodPrice}
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.foodName = result;
      this.foodPrice = result;
    });
  }


  constructor(public dialog: MatDialog, private fooditem:ItemsService, private ordereditem:ItemsService, private customorder:ItemsService) { }

    fooditems: Items[] | any ;                                            //---------------------array of fooditems
    ordereditems: Orders[] | any;
    customorders: CustomOrders | any;

    ngOnInit(): void {



    this.fooditem.getAllFooditems().subscribe((allData)=>  //-------------
    { 
      this.fooditems = allData;
      },

      (error)=>
      {
        console.log("Error Occured: " +error);                        //displays error on console when data fails to get stored
      }  
    )

    this.ordereditem.getAllOrderedItems().subscribe((result)=>{
      this.ordereditems = result;
    },
    (error)=>
    {
      console.log("Error Occured: " +error)
    }
    )

    this.customorder.getAllCustomOrder().subscribe((result)=>{
      this.customorders = result;
    })

  };

  deleteMenuItem(item_id:any){                                             //removing food item
    this.fooditem.deleteItem(item_id).subscribe((result)=>{            
      //console.log(result)
      this.ngOnInit()
    })
  }

  approveOrderedItem(){                                                           //Approving Order Items
    this.fooditem.saveOrderItemToYourOrder(this.ordereditems.value).subscribe((result)=>
    {
      console.log(result);
      //this.ngOnInit();
    })
  }

  removeOrderItem(item_id:any){                                             //removing order item
    this.fooditem.deleteOrderItem(item_id).subscribe((result)=>{            
      //console.log(result)
      this.ngOnInit()
    })
  }

  removeCustomItem(item_id:any){                                             //removing custom order item
    this.fooditem.deleteCustomOrder(item_id).subscribe((result)=>{            
      //console.log(result)
      this.ngOnInit()
    })
  }

  
//----------for sorting Order id
key:string = 'name';
reverse: boolean = false;

sort(key: string){
  this.key = key;
  this.reverse = !this.reverse;
}
}
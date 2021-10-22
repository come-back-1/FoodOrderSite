import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Items } from '../Items';
import { AddItemDialogComponent } from '../add-item-dialog/add-item-dialog.component';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-forrestaurant',
  templateUrl: './forrestaurant.component.html',
  styleUrls: ['./forrestaurant.component.scss']
})
export class ForrestaurantComponent implements OnInit{

  foodName!:string;
  foodPrice!:number;

  

  openDialog(): void {                                    //--------function for Dialog box------
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

  constructor(public dialog: MatDialog, private fooditem:ItemsService) { }

    fooditems: Items[] | any ;                                            //---------------------array of fooditems

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
  };

  deleteItem(item_id:any){                                             //deleteing food item
    this.fooditem.deleteItem(item_id).subscribe((result)=>{            
      //console.log(result)
      this.ngOnInit()
    })
  }
}
 
export interface DialogData {
  foodName:string;
  foodPrice:number;
}
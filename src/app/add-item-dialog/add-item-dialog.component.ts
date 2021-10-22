import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../forrestaurant/forrestaurant.component';
import { ItemsService } from '../services/items.service';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.scss']
})
export class AddItemDialogComponent implements OnInit {
 

  
  constructor( private item:ItemsService, public dialogRef: MatDialogRef<AddItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private _snackBar:MatSnackBar) { }


    addFood=new FormGroup( {
      name: new FormControl(''),
      price:new FormControl('')
    });
    
    
  ngOnInit(): void {
  }
  cancel(): void {
    this.dialogRef.close();
  }
  save(){                                              //--------------------save new food item and also store in json database
    //console.log(this.addFood.value);
    this.item.saveFoodItem(this.addFood.value).subscribe((result)=>{
      //console.log(result);
      this.ngOnInit();
    });
    this.dialogRef.close() 
  }

  openSnackBar(message: string, action: string) {                 //---------Succesfully added pop up
    this._snackBar.open(message="Successfully added!!!",  action="close")
  }
  
}



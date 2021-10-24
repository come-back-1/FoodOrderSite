import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { customDialogData } from '../forhrmanager/forhrmanager.component';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-custom-order-dialog',
  templateUrl: './custom-order-dialog.component.html',
  styleUrls: ['./custom-order-dialog.component.scss']
})
export class CustomOrderDialogComponent implements OnInit {

  constructor(private customorder:ItemsService ,public dialogRef: MatDialogRef<CustomOrderDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: customDialogData, private _snackBar:MatSnackBar) { }

    
    addCustomOrder=new FormGroup( {
      name: new FormControl(''),
    });

  ngOnInit(): void {
  }
  cancel(): void {
    this.dialogRef.close();
  }
  submit(){                                              //--------------------save new food item and also store in json database
    //console.log(this.addFood.value);
    this.customorder.saveCustomOrder(this.addCustomOrder.value).subscribe((result)=>{
      //console.log(result);
      this.ngOnInit();
    });
    this.dialogRef.close() 
  }

  openSnackBar(message: string, action: string) {                 //---------Succesfully ordered pop up
    this._snackBar.open(message="Ordered Successfully!!",  action="close")
  }
  

}

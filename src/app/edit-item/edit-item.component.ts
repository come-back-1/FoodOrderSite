import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  editFood=new FormGroup( {
    name: new FormControl(''),
    price:new FormControl('')
  });

  constructor(private item:ItemsService, private router:ActivatedRoute, private _snackBar:MatSnackBar ) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    
    this.item.editFoodItem(this.router.snapshot.params.id).subscribe((result:any)=>{
      console.log(result)
      
  this.editFood=new FormGroup( {
    name: new FormControl(result['name']),
    price:new FormControl(result['price'])
  });
  
})

  }

  updateFoodItem(){                       //---------------gets and updates food item to database
    //console.log(this.editFood.value);
    this.item.updateFoodItem(this.router.snapshot.params.id, this.editFood.value).subscribe((result)=>
    {
      console.log(result);
    })
  }

  
  openSnackBar(message: string, action: string) {                 //---------Succesfully edited pop up
    this._snackBar.open(message="Successfully edited!!!",  action="close")
  }
  

}

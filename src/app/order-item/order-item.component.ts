import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../services/items.service';


@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {

  quantity:number = 1;
  i=1;

  plus(){
    if(this.i != 20){
      this.i++;
      this.quantity = this.i;
    }
  }
  minus(){
    if(this.i != 1){
      this.i--;
      this.quantity = this.i;
    }
  }
  
orderFood=new FormGroup( {
  id: new FormControl(''),
  name: new FormControl(''),
  price:new FormControl(''),
  itemQt: new FormControl(''),
  status: new FormControl('')
});

  constructor(private item:ItemsService, private router:ActivatedRoute,  private _snackBar:MatSnackBar) { }


  ngOnInit(): void {
    console.log(this.router.snapshot.params.id);
    this.item.editFoodItem(this.router.snapshot.params.id).subscribe((result:any)=>{
      console.log(result)
      
  this.orderFood=new FormGroup( {
    id: new FormControl(result['id']),
    name: new FormControl(result['name']),
    price:new FormControl(result['price']),
    itemQt: new FormControl(result['itemQt'],  [Validators.required,  Validators.minLength(1)]),
    status: new FormControl(result['status'], Validators.required)
  });

})
}
  saveOrder(){
    this.item.saveOrderItem(this.orderFood.value).subscribe((result)=>
    {
      console.log(result);
      //this.ngOnInit();
    })
  }


  openSnackBar(message: string, action: string) {                 //---------Succesfully added pop up
    this._snackBar.open(message="Ordered Successfully!!!",  action="close")
  }

  get f(){
    return this.orderFood.controls
  }


}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../Items';
import { Orders } from '../orders';
import { CustomOrders } from '../customorder';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  urlfood : string = "http://localhost:3000/fooditems";     //--fetching Fooditem from database using json server

  urlorder : string = "http://localhost:3000/ordereditems";

  urlcustomorder : string = "http://localhost:3000/customorders";


  constructor( private http:HttpClient ) { }
  getAllFooditems(){   //fetching food items form json database
    return this.http.get<Items[]>(this.urlfood); 
  }
  getAllFooditemsToOrder(){    //getting food items from database to hrManager Menu list
    return this.http.get<Items[]>(this.urlfood)
  }

  saveFoodItem(data:any){     //saving food item on json database
    console.log(data);
    return this.http.post(this.urlfood, data);    
  }
  deleteItem( id: any ){  //function to delete item stored in json database
    return this.http.delete(`${this.urlfood}/${id}`) //concatenating 

  }


  editFoodItem( id:number ){    //------function for getting food item id form database
    console.log(id);
    return this.http.get(`${this.urlfood}/${id}`)
  }
  updateFoodItem(id:number, data:any){    //----------function to call and edit food item details of the food item database
    return this.http.put(`${this.urlfood}/${id}`, data)
  }
  
  getFoodItem(id:number){
    console.log(id);
    return this.http.get(`${this.urlfood}/${id}`)
  }

  //Order Item

  saveOrderItem(data:any){                        //----------function to save the ordered food item on database
    console.log(data);
    return this.http.post(this.urlorder, data)
   // return this.http.put(this.urlorder + '/' + data.id, data)
  }

  getAllOrderedItems(){                               //----------getting ordered data to display
    return this.http.get<Orders[]>(this.urlorder)
  }
  deleteOrderItem( id: any ){  //function to delete item stored in json database
    return this.http.delete(`${this.urlorder}/${id}`) //concatenating 

  }

  //Custom Order
  getAllCustomOrder() {
    return this.http.get<CustomOrders[]>(this.urlcustomorder)
  }
  saveCustomOrder( data:any ) {                      //
    console.log(data);
    return this.http.post(this.urlcustomorder, data)
  }
  deleteCustomOrder( id: any ){  //function to delete item stored in json database
    return this.http.delete(`${this.urlcustomorder}/${id}`) //concatenating 

  }

}



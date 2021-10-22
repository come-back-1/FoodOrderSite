import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Items } from '../Items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  

  url : string = "http://localhost:3000/fooditems"; //--fetching Fooditem from database using json server
  constructor( private http:HttpClient ) { }
  getAllFooditems(){   //fetching food items form json database
    return this.http.get<Items[]>(this.url); 
  }
  saveFoodItem(data:any){     //saving food item on json database
    console.log(data);
    return this.http.post(this.url, data);    
  }
  deleteItem( id: any ){  //function to delete item stored in json database
    return this.http.delete(`${this.url}/${id}`) //concatenating 

  }
}

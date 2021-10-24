export class Orders {
    id:string;
    name:string;
    price:string;
    itemQt:number;
    status:string


    constructor (id:string, name:string, price:string, itemQt:number, status:string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.itemQt = itemQt;
        this.status = status;
    }

}
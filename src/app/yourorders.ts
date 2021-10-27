export class YourOrders{
    id:string;
    name:string;
    totalamt:number;
    response:string

    constructor (id:string, name:string, totalamt:number, response:string){
        this.id = id;
        this.name = name;
        this.totalamt = totalamt;
        this.response = response
    }
}


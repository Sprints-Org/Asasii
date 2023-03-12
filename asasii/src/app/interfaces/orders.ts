import {Products} from './products';
import {Shipping_info} from './shipping_info';

export class Orders {
    _id:string;
    shipping_info:Shipping_info[];
    products:Products[];
    sub_total:number;
    shipping:number;
    total:number;
    status:string;

    constructor(shipping_info:any,products:any,sub_total:number,
        total:number,status:string,shipping:number){
            this._id="";
            this.shipping_info=shipping_info;
            this.shipping=shipping;
            this.products=products;
            this.status=status;
            this.total=total;
            this.sub_total=sub_total;
    
      }

}
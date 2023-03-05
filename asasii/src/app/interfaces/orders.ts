import {Products} from './products';
import {Shipping_info} from './shipping_info';

export interface Orders {
    _id:string;
    shipping_info:Shipping_info[];
    products:Products[];
    sub_total:number;
    shipping:number;
    total:number;
    status:string;

}
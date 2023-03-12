import {Additional_info} from './additional_info';
export interface Products {
    _id:string;
    name:string;
    image:string;
    price:number;
    quantity:number;
    colors:string[];
    description:string;
    Additional_info:Additional_info[];
    category_name:string;
}
import { Products } from "./products";

export interface CartLine {
    product : Products;
    quantity : number;
    price: number;

}

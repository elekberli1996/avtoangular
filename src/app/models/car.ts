import { Data } from "popper.js";
import { Photo } from "./photo";

export class Car {
    carId?:number;
    categoryId?:number;
    categoryName?:string;
    photos?:Photo[];
    price?:number;
    modelName?:string;
    modelId?:number;
    userId?:number;
    photoUrl?:string;
    city?:string;
    year?:number;
    type?:string;
    color?:string;
    vip?:boolean;
    otherNotes?:string;
    addedData?:Data;
    engine?:string;
    enginePower?:string;
    totalWay?:number;
    transmittor?:string;
    phoneNumber?:number;
}

export interface IProduct{
	productId:number;
    productName:string;
    productCode:string;
    releaseDate:string;
    description:string;
    price:number;
    starRating:number;
    imageUrl:string;
}


/**export class Product implements IProduct {

	constructor(productId: number, productName: string, productCode: string,
		releaseDate: string, description: string, price: number,
		starRating: number, imageUrl: string, ) { }

	calculateDiscount(percent: number) {
		return this.price - (this.price * percent / 100)
	}
}*/
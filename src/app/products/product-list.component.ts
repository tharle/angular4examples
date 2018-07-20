import { Component, OnInit } from '@angular/core';
import {IProduct} from './product';
import {ProductService} from './product.service';


@Component({
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
	pageTitle: string = 'Product List!!!';
	imageWith: number = 50;
	imageMargin: number = 2;
	showImagens:boolean = true;
	_listFilter:string;
	errorMessage: string;


	filteredProducts: IProduct[];
	products: IProduct[];

	//################################
	// CONSTRUCTORS
	//################################
	constructor(private productService: ProductService){
		this.listFilter = "";
	}

	ngOnInit(): void{
		this.productService.getProducts().subscribe(
			products => {
				this.products = products;
				this.filteredProducts = this.products;
			},
			error => this.errorMessage = <any>error
		);
	}


	//################################
	// SETS AND GETS
	//################################
	get listFilter(): string{
		return this._listFilter;
	}

	set listFilter(value:string){
		this._listFilter = value;
		this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
	}

	//################################
	// ACTIONS AND EVENTS
	//################################
	onShowImagens():  void{
		this.showImagens = !this.showImagens;
	}

	onRatingClicked(message: string){
		this.pageTitle = `Product List ${message}`;
	}

	//################################
	// FUNCTIONS
	//################################
	performFilter(filterBy: string): IProduct[]{
		filterBy = filterBy.toLocaleLowerCase();

		return this.products.filter((product: IProduct) => 
			product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
		);
	}
}

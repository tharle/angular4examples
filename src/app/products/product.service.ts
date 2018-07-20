import {Injectable} from '@angular/core';
import {IProduct} from './product';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';



@Injectable({
	providedIn: 'root'
})
export class ProductService {
	private productUrl = 'assets/products.json';
	constructor(private http: HttpClient){

	}
	
	getProducts(): Observable<IProduct[]>{
		return this.http
					.get<IProduct[]>(this.productUrl).pipe(
						tap(data => console.log('All: '+ JSON.stringify(data))),
						catchError(this.handlerError)
					);
	}

	private handlerError(err: HttpErrorResponse){
		let errorMessage = '';
		if(err.error instanceof ErrorEvent){
			errorMessage = `An error ocurred: ${err.error.message}.`;
		}else{
			errorMessage = `Server returned code: ${err.status}, error message is ${err.error.message}.`;
		}

		console.log(errorMessage);

		return throwError(errorMessage);
		
	}
	
}
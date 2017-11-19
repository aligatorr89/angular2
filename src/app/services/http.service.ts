import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
	//routeName: string;
	
	constructor(private http: Http) {
		console.log("HttpService on...");
	}
	
	url = 'http://localhost:3001/';
	
	postLogin(data: loginData) {
		
		let params = new URLSearchParams();
		let options = new RequestOptions({ 'headers': new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
		
		for(let key in data) params.set(key, data[key]);
		
		return this.http.post(this.url + 'login', params.toString(), options)
			.map(res => res.statusText);
	}
	
	postRegister(data: registerData) {

		let params = new URLSearchParams();
		let options = new RequestOptions({ 'headers': new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
		
		for(let key in data) params.set(key, data[key]);
		
		return this.http.post(this.url + 'register', params.toString(), options)
			.map(res => res.statusText);
	}
	
	test() {
		return this.http.get('http://localhost:3001/test')
			.map(res => res.json());
	}
}

export interface loginData {
	email: string;
	password: string;
}

export interface registerData {
	name: string;
	lastname:string;
	email: string;
	password: string;
}


/*@Injectable()
export abstract class dataModelService {
  getLoginModel: () => loginData;
	getRegisterModel: () => registerData;
}*/


import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

import {I_login} from '../interfaces/login';
import {I_register} from '../interfaces/register';

@Injectable()
export class HttpService {

	constructor(private http: Http) {
		console.log("HttpService on...");
	}
	
	url = 'http://localhost:3001/';
	
	postLogin(data: I_login) {
		
		let params = new URLSearchParams();
		let options = new RequestOptions({ 'headers': new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
		
		for(let key in data) params.set(key, data[key]);
		
		return this.http.post(this.url + 'login', params.toString(), options)
			.map(res => res.statusText);
	}
	
	postRegister(data: I_register) {

		let params = new URLSearchParams();
		let options = new RequestOptions({ 'headers': new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
		
		for(let key in data) params.set(key, data[key]);
		
		return this.http.post(this.url + 'register', params.toString(), options)
			.map(res => res.statusText);
	}
	
}


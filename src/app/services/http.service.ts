import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { CookieService } from 'angular2-cookie/core';

import {I_login} from '../interfaces/login';
import {I_register} from '../interfaces/register';
import {I_blacklist} from '../interfaces/blacklist';

@Injectable()
export class HttpService {
	
	constructor(private http: Http, private cookie: CookieService) {
		console.log("HttpService on...");
	}
	
	url = 'http://localhost:3001/';
	headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
	options = new RequestOptions({ 'headers': this.headers, withCredentials: true });
	
	insertBlacklist(row: I_blacklist) {
		let params = new URLSearchParams();
		for(let key in row) params.set(key, row[key]);
		
		return this.http.post(this.url + 'insert', params.toString(), this.options)
			.map(res => res.json());
	}
	
	getBlacklist(route: string) {
		return this.http.get(this.url + route, this.options)
			.map(res => res.json());
	}
	
	setBlacklist(row: I_blacklist) {
		let params = new URLSearchParams();
		for(let key in row) params.set(key, row[key]);
		
		return this.http.post(this.url + 'edit', params.toString(), this.options)
			.map(res => res.json());
	}
	
	deleteBlacklist(row: I_blacklist) {
		let params = new URLSearchParams();
		params.set('id', row.id.toString());
		
		return this.http.post(this.url + 'delete', params.toString(), this.options)
			.map(res => res.json());
	}
	
	postLogin(data: I_login) {
		let params = new URLSearchParams();
		
		for(let key in data) params.set(key, data[key]);
		
		return this.http.post(this.url + 'login', params.toString(), this.options)
			.map(res => res.statusText);
	}
	
	logout() {
		return this.http.post(this.url + 'logout', '', this.options)
			.map(res => res.statusText);
	}
	
	postRegister(data: I_register) {
		let params = new URLSearchParams();
		for(let key in data) params.set(key, data[key]);
		
		return this.http.post(this.url + 'register', params.toString(), this.options)
			.map(res => res.statusText);
	}
	
}


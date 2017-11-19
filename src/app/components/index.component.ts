import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { HttpService } from '../services/http.service';

import {I_login} from '../interfaces/login';
import {I_register} from '../interfaces/register';


@Component({
	moduleId: module.id,
  selector: 'index',
  templateUrl: './index.component.html',
	providers: [HttpService]
})
export class IndexComponent {
	
	loginData = {} as I_login;
	registerData = {} as I_register;
	
	constructor(private httpService: HttpService, private router: Router) {}
	
	login() {
		this.httpService.postLogin(this.loginData).subscribe(statusText => {
			if(statusText === 'OK') this.router.navigate(['home']);
		});
	}
	
	register() {
		this.httpService.postRegister(this.registerData).subscribe(statusText => {
			if(statusText === 'OK') console.log('registered. Please login...');
		});
	}
}

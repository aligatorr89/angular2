import { Component } from '@angular/core';
import { HttpService } from './services/http.service';

import {Ilogin} from './interfaces/login';
import {Iregister} from './interfaces/register';

@Component({
  selector: 'my-app',
  template: `
  <p>This is the main API page. Please use one of the following URLs to access all information:</p>
  <h1>User management</h1>
	<ul>
	
		<li>
			<a class="link" href="login">POST api/login</a>
			<p class="description">Post fields:<br>email, password</p>
			
			<form>
				<input name="email" type="text" [(ngModel)]="loginData.email" />
				<input name="password" type="password" [(ngModel)]="loginData.password" />	
				<button (click)="login()">LOGIN</button>
			</form>
		</li>
		
		<li>
			<a class="link" href="logout">POST api/logout</a>
			<p class="description">Post fields:<br>id</p>
		</li>
		
		<li>
			<a class="link" href="register">POST api/register</a>
			<p class="description">Post fields:<br>name, lastname, email, password</p>
			
			<form method="post" action="register">
				<input name="name" type="text" [(ngModel)]="registerData.name" />
				<input name="lastname" type="text" [(ngModel)]="registerData.lastname" />
				<input name="email" type="text" [(ngModel)]="registerData.email" />
				<input name="password" type="password" [(ngModel)]="registerData.password" />
				<button type="submit" (click)="register()">REGISTER</button>
			</form>
		</li>
		
	</ul>
  `,
	providers: [HttpService]
})
export class AppComponent {

	loginData: Ilogin;
	registerData: Iregister;
	
	constructor(private httpService: HttpService) {
	
		this.loginData = {
			email: '',
			password: ''
		}
		this.registerData = {
			name: '',
			lastname: '',
			email: '',
			password: ''
		}
	}
	
	login() {
		this.httpService.postLogin(this.loginData).subscribe(statusText => {
			if(statusText === 'OK') console.log('OK');
		});
	}
	
	register() {
		this.httpService.postRegister(this.registerData).subscribe(statusText => {
			if(statusText === 'OK') console.log('OK');
		});
	}
	
	// test :3001/test api
	test() {
		this.httpService.test().subscribe(data => {
			console.log(data);
		});
	}
}


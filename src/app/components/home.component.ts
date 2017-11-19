import { Component } from '@angular/core';

import { HttpService } from '../services/http.service';

import { I_blacklist, C_blacklist } from '../interfaces/blacklist';

@Component({
	moduleId: module.id,
  selector: 'home',
  templateUrl: './home.component.html',
	providers: [HttpService]
})
export class HomeComponent {
	
	blacklistData = [] as I_blacklist[];
	row: I_blacklist = new C_blacklist();
	rowKeys: string[];
	currentList: string = '';
	newRow = {} as I_blacklist;
	
	constructor(private http: HttpService) {
		this.rowKeys = Object.keys(this.row);
	}
	
	insert() {
		//this.blacklistData.push(this.newRow);
		this.http.insertBlacklist(this.newRow).subscribe(res => {
			this.newRow = {} as I_blacklist;
		});
	}
	
	edit(i: number) {
		this.http.setBlacklist(this.blacklistData[i]).subscribe(res => {
			console.log(res);
		});
	}
	
	delete(i: number) {
		this.http.deleteBlacklist(this.blacklistData[i]).subscribe(res => {
			if(res.status === 'success') this.blacklistData.splice(i, 1);
		});
	}
	
	get(route: string) {
		this.http.getBlacklist(route).subscribe(res => {
			this.blacklistData = res.data;
			this.currentList = route;
		})
	}
	
}

import { Component } from '@angular/core';

import { HttpService } from '../services/http.service';

@Component({
	moduleId: module.id,
  selector: 'home',
  templateUrl: './home.component.html',
	providers: [HttpService]
	
})
export class HomeComponent {}

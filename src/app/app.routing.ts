import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index.component';
import { HomeComponent } from './components/home.component';

const appRoutes: Routes = [
	{
		path: '',
		component: IndexComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: '**',
		redirectTo:''
	}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
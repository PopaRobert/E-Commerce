import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PageAddresses } from './app.routing.addresses';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { SignInPageComponent } from './components/pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/pages/sign-up-page/sign-up-page.component';

const routes: Routes = [
	{
		path: PageAddresses.ROOT_ADDRESS,
		pathMatch: 'full',
		component: HomePageComponent,
	},
	{
		path: PageAddresses.MY_ACCOUNT_PAGE_ADDRESS,
		pathMatch: 'full',
		component: MyAccountPageComponent,
	},
	{
		path: PageAddresses.FAVORITES_PAGE_ADDRESS,
		pathMatch: 'full',
		component: MyAccountPageComponent,
	},
	{
		path: PageAddresses.CART_PAGE_ADDRESS,
		pathMatch: 'full',
		component: MyAccountPageComponent,
	},
	{
		path: PageAddresses.SIGN_IN_PAGE_ADDRESS,
		pathMatch: 'full',
		component: SignInPageComponent,
	},
	{
		path: PageAddresses.SIGN_UP_PAGE_ADDRESS,
		pathMatch: 'full',
		component: SignUpPageComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, {
			onSameUrlNavigation: 'reload',
		}),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}

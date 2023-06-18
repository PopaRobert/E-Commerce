import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageAddresses } from 'src/app/app.routing.addresses';
@Component({
	selector: 'app-top-navigation-bar',
	templateUrl: './top-navigation-bar.component.html',
	styleUrls: ['./top-navigation-bar.component.scss'],
})
export class TopNavigationBarComponent {
	constructor(private router: Router) {}

	public onHome() {
		this.router.navigate([PageAddresses.ROOT_ADDRESS]);
	}

	public onAccount() {
		this.router.navigate([PageAddresses.SIGN_UP_PAGE_ADDRESS]);
	}

	public onFavorites() {
		this.router.navigate([PageAddresses.FAVORITES_PAGE_ADDRESS]);
	}

	public onCart() {
		this.router.navigate([PageAddresses.CART_PAGE_ADDRESS]);
	}
}

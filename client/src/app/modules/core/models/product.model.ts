import { Review } from './reviews.model';

export class Product {
	name: string;
	image_link: string;
	price: number;
	in_stock: boolean;
	reviews: Review[];

	constructor() {
		this.name = '';
		this.image_link = '';
		this.price = 0;
		this.in_stock = false;
		this.reviews = [];
	}
}

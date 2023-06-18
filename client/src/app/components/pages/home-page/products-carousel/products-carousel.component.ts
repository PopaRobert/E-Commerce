import { Component } from '@angular/core';
import { Product } from 'src/app/modules/core/models/product.model';
// import { Review } from 'src/app/modules/core/models/reviews.model';

@Component({
	selector: 'app-products-carousel',
	templateUrl: './products-carousel.component.html',
	styleUrls: ['./products-carousel.component.scss'],
})
export class ProductsCarouselComponent {
	public slideConfig = {
		slidesToShow: 5,
		slidesToScroll: 5,
		infinite: false,
		dots: true,
	};

	products: Product[] = Array.from({ length: 40 }, () => ({
		name: this.randomFrom([
			'Product 1',
			'Product 2',
			'Product 3',
			'Product 4',
			'Product 5',
		]),
		image_link: `https://picsum.photos/300/300?random=${Math.floor(
			Math.random() * 1000,
		)}`,
		price: Math.floor(Math.random() * 41) + 10,
		reviews: Array.from({ length: Math.floor(Math.random() * 5) + 1 }, () => ({
			name: this.randomFrom([
				'Product 1',
				'Product 2',
				'Product 3',
				'Product 4',
				'Product 5',
			]),
			rating: Math.floor(Math.random() * 5) + 1,
			comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		})),
		in_stock: Math.random() >= 0.5,
	}));

	randomFrom(arr: any[]) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	calculateAverageRating({ reviews }: Product): number {
		if (!reviews || reviews.length === 0) return 0;
		const average =
			reviews.reduce((acc, { rating }) => acc + rating, 0) / reviews.length;
		return Number(average.toFixed(2));
	}

	getTotalReviews({ reviews }: Product): number {
		return reviews ? reviews.length : 0;
	}

	getFilledStars(rating: number): number[] {
		return Array(Math.round(rating))
			.fill(0)
			.map((x, i) => i);
	}

	getEmptyStars(rating: number): number[] {
		return Array(5 - Math.round(rating))
			.fill(0)
			.map((x, i) => i);
	}
}

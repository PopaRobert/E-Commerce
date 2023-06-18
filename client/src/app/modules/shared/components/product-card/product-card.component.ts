import { Component, Input } from '@angular/core';
import { Product } from 'src/app/modules/core/models/product.model';

@Component({
	selector: 'app-product-card',
	templateUrl: './product-card.component.html',
	styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent {
	@Input() product: Product = new Product();

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

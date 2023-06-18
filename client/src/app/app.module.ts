import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationBarComponent } from './components/layout/top-navigation-bar/top-navigation-bar.component';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AddsCarouselComponent } from './components/pages/home-page/adds-carousel/adds-carousel.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { ProductsCarouselComponent } from './components/pages/home-page/products-carousel/products-carousel.component';
import { IvyCarouselModule } from 'carousel-angular';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductCardComponent } from './modules/shared/components/product-card/product-card.component';
import { SignInPageComponent } from './components/pages/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/pages/sign-up-page/sign-up-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './modules/core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		TopNavigationBarComponent,
		HomePageComponent,
		MyAccountPageComponent,
		AddsCarouselComponent,
		ProductsCarouselComponent,
		ProductCardComponent,
		SignInPageComponent,
		SignUpPageComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MatIconModule,
		MatToolbarModule,
		MatButtonModule,
		IvyCarouselModule,
		SlickCarouselModule,
		ReactiveFormsModule,
		HttpClientModule,
	],
	providers: [AuthService],
	bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { PageAddresses } from './app.routing.addresses';
import { MyAccountPageComponent } from './components/pages/my-account-page/my-account-page.component';

const routes: Routes = [
  {
    path: PageAddresses.ROOT_ADDRESS,
    pathMatch: 'full',
    component: HomePageComponent
  },  
  {
    path: PageAddresses.MY_ACCOUNT_PAGE_ADDRESS,
    pathMatch: 'full',
    component: MyAccountPageComponent
  },
  {
    path: PageAddresses.FAVORITES_PAGE_ADDRESS,
    pathMatch: 'full',
    component: MyAccountPageComponent
  },
  {
    path: PageAddresses.CART_PAGE_ADDRESS,
    pathMatch: 'full',
    component: MyAccountPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: 'reload'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

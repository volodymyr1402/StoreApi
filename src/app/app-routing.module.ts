import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SmartphonesComponent } from './pages/smartphones/smartphones.component';
import { LaptopsComponent } from './pages/laptops/laptops.component';
import { FragrancesComponent } from './pages/fragrances/fragrances.component';
import { SkincareComponent } from './pages/skincare/skincare.component';
import { GroceriesComponent } from './pages/groceries/groceries.component';
import { HomeDecorationComponent } from './pages/home-decoration/home-decoration.component';

const routes: Routes = [
  { path: '', component: ProductPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'smartphones', component: SmartphonesComponent },
  { path: 'laptops', component: LaptopsComponent },
  { path: 'fragrances', component: FragrancesComponent },
  { path: 'skincare', component: SkincareComponent },
  { path: 'groceries', component: GroceriesComponent },
  { path: 'home-decoration', component: HomeDecorationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

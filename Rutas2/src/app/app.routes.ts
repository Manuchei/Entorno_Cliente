import { ProductViewComponent } from './pages/product-view/product-view.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductosListComponent } from './pages/productos-list/productos-list.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { Page404Component } from './pages/page404/page404.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'productos', component: ProductosListComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'producto/:url', component: ProductViewComponent},
  { path: '**', component: Page404Component }
];

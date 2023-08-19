import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/Home/home.component';
import { BookComponent } from './features/books/book/book.component';
import { DetailBookComponent } from './features/books/detail-book/detail-book.component';
import { AboutComponent } from './features/about/about.component';
import { CartComponent } from './cart/cart/cart.component';
import { UserComponent } from './features/User/user.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "book-list", component: BookComponent},
  { path: "about", component: AboutComponent},
  { path: "cart-shopping", component: CartComponent},
  { path: "cart-shopping/user-form", component: UserComponent },
  { path: "detail-book/:id", component: DetailBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

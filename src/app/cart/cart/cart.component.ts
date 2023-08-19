import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Book } from 'src/app/Core/modules/Book.model';
import { BookService } from 'src/app/Core/services/book.service';
import { CartService } from 'src/app/Core/services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cartItmes: Book[] = [];
  bookService: BookService = inject(BookService);
  cartService: CartService = inject(CartService);
  router: Router = inject(Router);

  constructor(){
    this.cartService.getCartItems().subscribe((item) => (
      this.cartItmes = item
    ));
  }

  removeFromCart(book: Book): void {
    this.cartService.removeFromCart(book);
  }

  continueBuy(): void {
    this.router.navigate(["cart-shopping/user-form"]);
  }

}

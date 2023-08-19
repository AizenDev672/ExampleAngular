import { Component, inject} from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Book } from "src/app/Core/modules/Book.model";
import { BookService } from "src/app/Core/services/book.service";
import { CartService } from "src/app/Core/services/cart.service";

@Component({
    selector: "app-book-list",
    standalone: true,
    imports: [
        CommonModule,
        RouterLink
    ],
    templateUrl: "./book-list.component.html",
    styleUrls: ["./book-list.component.css"]
})


export class BookListComponent{
    book: Book[] = [];

    bookService: BookService = inject(BookService);
    cartService: CartService = inject(CartService);

    constructor(){
        this.book = this.bookService.getAllBooks();
    }

    addToCart(book: Book): void {
        this.cartService.addToCart(book);
    }
};
import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Book } from "src/app/Core/modules/Book.model";
import { BookService } from "src/app/Core/services/book.service";

@Component({
    selector: "app-detail-book",
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: "./detail-book.component.html"
})

export class DetailBookComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    bookService =  inject(BookService);
    book: Book[] = [];

    constructor(){
        const bookId = parseInt(this.route.snapshot.params['id'], 10);
        const query = this.bookService.getBookById(bookId);
        this.book = query;
    }
};
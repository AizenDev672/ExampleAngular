import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookListComponent } from "../book-list/book-list.component";

@Component({
    selector: "app-book",
    standalone: true,
    imports: [
        CommonModule,
        BookListComponent
    ],
    templateUrl: "./book.component.html"
})

export class BookComponent {};
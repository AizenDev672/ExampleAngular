import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BookListComponent } from "../books/book-list/book-list.component";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [
        CommonModule,
        BookListComponent
    ],
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent{
};
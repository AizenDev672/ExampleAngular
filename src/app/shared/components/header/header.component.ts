import { Component, inject } from "@angular/core";
import { Book } from "src/app/Core/modules/Book.model";
import { CartService } from "src/app/Core/services/cart.service";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html"
})

export class HeaderComponent {
    cart: Book[] = [];
    cartService: CartService = inject(CartService);

    constructor(){
        this.cartService.getCartItems().subscribe(items => (
            this.cart = items
        ));
    }
};
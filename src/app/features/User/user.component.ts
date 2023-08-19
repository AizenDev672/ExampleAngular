import { Component, inject, OnInit } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, Validators } from "@angular/forms";
import { FormGroup, FormBuilder } from "@angular/forms";
import { User } from "src/app/Core/modules/user.model";
import { Book } from "src/app/Core/modules/Book.model";
import { CartService } from "src/app/Core/services/cart.service";
import { ReceiptService } from "src/app/Core/services/receipt.service";
import { Receipt } from "src/app/Core/modules/receipt.model";

@Component({
    selector: "app-user",
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    templateUrl: "./user.component.html"
})

export class UserComponent implements OnInit {
    userForm: FormGroup;
    book: Book[] = [];
    receipt: Receipt[] = [];
    cartService: CartService = inject(CartService);
    receiptService: ReceiptService = inject(ReceiptService);
    constructor(private fb: FormBuilder){
        this.userForm = this.fb.group({
            name: ["", Validators.required],
            phone: ["", Validators.required],
            email: ["", Validators.required],
            city: ["", Validators.required],
            section: ["", Validators.required],
            address: ["", Validators.required]
        });
    }

    ngOnInit(): void {
        this.cartService.getCartItems().subscribe(item => ( this.book = item ));
    }

    onSubmit(){
        if(this.userForm.valid){
            const user: User = this.userForm.value;
            this.cartService.addToUser(user);
        }
    }
};
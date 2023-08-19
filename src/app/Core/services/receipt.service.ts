import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Receipt } from "../modules/receipt.model";

@Injectable({
    providedIn: "root"
})

export class ReceiptService {
    private receiptCart: Receipt[] = [];
    private receiptSubject = new BehaviorSubject<Receipt[]>(this.receiptCart);

    getReceipt(){
        return this.receiptSubject.asObservable();
    }

    addToReceipt(receipt: Receipt): void{
        this.receiptCart.push(receipt);
        this.receiptSubject.next(this.receiptCart);
    }
};
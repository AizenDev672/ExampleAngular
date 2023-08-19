import { User } from "./user.model";
import { Book } from "./Book.model";

export interface Receipt {
    User: User[];
    Book: Book[];
    date: Date;
    numerFacture: String;
}
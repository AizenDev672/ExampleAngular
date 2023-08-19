import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../modules/Book.model';
import { User } from '../modules/user.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItem: Book[] = [];
  private cartUser: User[] = [];
  private cartSubject = new BehaviorSubject<Book[]>(this.cartItem);
  private userSubject = new BehaviorSubject<User[]>(this.cartUser);


  // Information user
  getUserCart(){
    return this.userSubject.asObservable();
  }

  addToUser(user: User): void{
    this.cartUser.push(user);
    this.userSubject.next(this.cartUser);
    console.log(this.cartUser);
  }

  getCartItems(): Observable<Book[]> {
    return this.cartSubject.asObservable();
  }

  addToCart(book: Book): void {
    this.cartItem.push(book);
    this.cartSubject.next(this.cartItem);
  }

  removeFromCart(book: Book): void {
    const index = this.cartItem.findIndex(item => item.id === book.id);
    if(index !== -1){
      this.cartItem.splice(index, 1);
      this.cartSubject.next(this.cartItem);
    }
  }
}

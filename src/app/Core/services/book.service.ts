import { Injectable } from "@angular/core";
import { Book } from "../modules/Book.model";

@Injectable({
    providedIn: "root"
})

export class BookService {
    books: Book[] = [
        {
            id: 1,
            name: "El  señor de los anillos",
            author: "J.R.R Tolkien",
            genre: "Fantasia",
            category: "Aventura",
            numPage: 1024,
            Yearpublucation: 1954,
            description: "Un viaje épico de un grupo de hobbits para destruir el Anillo Único, un arma poderosa que podría destruir la Tierra Media."
        },
        {
            id: 2,
            name: "La guerra de las galaxias",
            author: "George Lucas",
            genre: "Ciencia ficcion",
            category: "Aventura",
            numPage: 468,
            Yearpublucation: 1977,
            description: "Una historia de un grupo de rebeldes que luchan contra un malvado imperio"
        },
        {
            id: 3,
            name: "Harry Potter y la piedra filosofal",
            author: "J.K. Rowling",
            genre: "Fantasia",
            category: "Fantasia",
            numPage: 320,
            Yearpublucation: 1997,
            description: "La historia de un joven mago que descubre su herencia y comienza su educacion en una escuela de magia"
        },
        {
            id: 4,
            name: "Cien años de soledad",
            author: "Gabriela Garcia Márquez",
            genre: "Fantasia",
            category: "Realismo mágico",
            numPage: 424,
            Yearpublucation: 1967,
            description: "La historia de la familia Buendía y su pueblo, Macondo, durante un siglo."
        },
        {
            id: 5,
            name: "El alquimista",
            author: "Paulo Coelho",
            genre: "Fantasia",
            category: "Autoayuda",
            numPage: 192,
            Yearpublucation: 1988,
            description: "La historia de un joven pastor que viaja por el mundo en busca de su tesoro."
        }
    ];


    getAllBooks(): Book[] {
        return this.books;
    }

    getBookById(id: number): Book []{
        const query = this.books.filter((item) => item.id === id);
        return query;
    }
};
package testing.src.main.java.com.library.service;

import testing.src.main.java.com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter Injection
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void displayService() {
        System.out.println("Book Service Created");

        bookRepository.displayRepository();
    }
}

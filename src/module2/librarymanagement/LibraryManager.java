package src.module2.librarymanagement;

public class LibraryManager {

    private Book[] books;
    private int count;

    public LibraryManager(int capacity) {
        books = new Book[capacity];
        count = 0;
    }

    public void addBook(Book book) {
        if (count < books.length) {
            books[count++] = book;
        }
    }

    // Linear Search - O(n)
    // Best for unsorted data or small datasets
    public Book[] linearSearchByTitle(String title) {
        Book[] results = new Book[count];
        int resultCount = 0;

        for (int i = 0; i < count; i++) {
            if (books[i].title.toLowerCase().contains(title.toLowerCase())) {
                results[resultCount++] = books[i];
            }
        }

        Book[] finalResults = new Book[resultCount];
        for (int i = 0; i < resultCount; i++) {
            finalResults[i] = results[i];
        }
        return finalResults;
    }

    public Book[] linearSearchByAuthor(String author) {
        Book[] results = new Book[count];
        int resultCount = 0;

        for (int i = 0; i < count; i++) {
            if (books[i].author.toLowerCase().contains(author.toLowerCase())) {
                results[resultCount++] = books[i];
            }
        }

        Book[] finalResults = new Book[resultCount];
        for (int i = 0; i < resultCount; i++) {
            finalResults[i] = results[i];
        }
        return finalResults;
    }

    // Binary Search - O(log n)
    // Requires sorted data by book ID
    public Book binarySearchByBookId(int bookId) {
        int low = 0, high = count - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;

            if (books[mid].bookId == bookId) {
                return books[mid];
            } else if (books[mid].bookId < bookId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    // Sort by Book ID for binary search
    public void sortByBookId() {
        for (int i = 0; i < count - 1; i++) {
            for (int j = 0; j < count - i - 1; j++) {
                if (books[j].bookId > books[j + 1].bookId) {
                    Book temp = books[j];
                    books[j] = books[j + 1];
                    books[j + 1] = temp;
                }
            }
        }
    }

    public void displayBooks(Book[] books, String searchType) {
        if (books.length == 0) {
            System.out.println("No books found!");
            return;
        }
        System.out.println("\nSearch Results (" + searchType + "):");
        for (Book book : books) {
            if (book != null) {
                System.out.println(book.bookId + " - " + book.title + " by " + book.author + " : $" + book.price);
            }
        }
    }

    public static void main(String[] args) {
        LibraryManager manager = new LibraryManager(10);

        manager.addBook(new Book(101, "Java Programming", "Robert Martin", 45.99));
        manager.addBook(new Book(102, "Clean Code", "Robert Martin", 50.00));
        manager.addBook(new Book(103, "Algorithms", "Thomas Cormen", 75.00));
        manager.addBook(new Book(104, "Design Patterns", "Gang of Four", 55.50));
        manager.addBook(new Book(105, "Python Basics", "Guido van Rossum", 35.00));

        System.out.println("=== LINEAR SEARCH DEMONSTRATION ===");
       

        Book[] titleResults = manager.linearSearchByTitle("Java");
        manager.displayBooks(titleResults, "Title Search");

        Book[] authorResults = manager.linearSearchByAuthor("Martin");
        manager.displayBooks(authorResults, "Author Search");

        System.out.println("\n=== BINARY SEARCH DEMONSTRATION ===");
       
        manager.sortByBookId();
        System.out.println("\nBooks sorted by ID:");
        for (int i = 0; i < 5; i++) {
            System.out.println(manager.books[i].bookId + " - " + manager.books[i].title);
        }

        Book found = manager.binarySearchByBookId(103);
        if (found != null) {
            System.out.println("\nFound by ID 103: " + found.title + " by " + found.author + " : $" + found.price);
        } else {
            System.out.println("\nBook ID 103 not found");
        }

         }
}

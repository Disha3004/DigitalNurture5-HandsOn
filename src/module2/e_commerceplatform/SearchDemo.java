package src.module2.e_commerceplatform;

import java.util.Arrays;
import java.util.Comparator;

public class SearchDemo {

    // Linear Search
    static Product linearSearch(Product[] products, int id) {
        for (Product p : products) {
            if (p.productId == id) {
                return p;
            }
        }
        return null;
    }

    // Binary Search
    static Product binarySearch(Product[] products, int id) {
        int low = 0, high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;

            if (products[mid].productId == id)
                return products[mid];
            else if (products[mid].productId < id)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
            new Product(103, "Mouse", "Electronics"),
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "Keyboard", "Electronics")
        };

        // Linear Search
        Product p1 = linearSearch(products, 102);
        System.out.println("Linear Search: " + p1.productName);

        // Sort array for Binary Search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productId));

        Product p2 = binarySearch(products, 102);
        System.out.println("Binary Search: " + p2.productName);
    }
}
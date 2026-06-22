package src.module2.inventorymanagementsystem;
import java.util.HashMap;
public class InventoryManager {

    HashMap<Integer, Product> inventory = new HashMap<>();

    void addProduct(Product p) {
        inventory.put(p.productId, p);
    }

    void updateProduct(int id, int quantity, double price) {
        if (inventory.containsKey(id)) {
            Product p = inventory.get(id);
            p.quantity = quantity;
            p.price = price;
        }
    }

    void deleteProduct(int id) {
        inventory.remove(id);
    }

    void displayProducts() {
        for (Product p : inventory.values()) {
            System.out.println(
                p.productId + " " +
                p.productName + " " +
                p.quantity + " " +
                p.price
            );
        }
    }

    public static void main(String[] args) {

        InventoryManager im = new InventoryManager();

        im.addProduct(new Product(101, "Laptop", 10, 50000));
        im.addProduct(new Product(102, "Mouse", 50, 500));

        System.out.println("Initial Inventory:");
        im.displayProducts();

        im.updateProduct(101, 15, 52000);

        System.out.println("\nAfter Update:");
        im.displayProducts();

        im.deleteProduct(102);

        System.out.println("\nAfter Delete:");
        im.displayProducts();
    }
}
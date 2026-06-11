package observerpatternexample;

public class ObserverTest {

    public static void main(String[] args) {

        StockMarket stockMarket = new StockMarket();

        Observer mobileUser =
                new MobileApp("Disha");

        Observer webUser =
                new WebApp("Investor");

        stockMarket.registerObserver(mobileUser);
        stockMarket.registerObserver(webUser);

        System.out.println("Stock Price Changed:");

        stockMarket.setStock("TCS", 4200.50);

        System.out.println();

        stockMarket.setStock("Infosys", 1550.75);
    }
}
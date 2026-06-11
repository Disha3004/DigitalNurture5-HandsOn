package adapterpatternexample;

public class StripeGateway {

    public void makePayment(double amount) {
        System.out.println("Processing Stripe payment of Rs." + amount);
    }
}

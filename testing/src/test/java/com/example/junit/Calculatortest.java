package testing.src.test.java.com.example.junit;


import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class Calculatortest {

    @Test
    void testAdd() {
        Calculator calculator = new Calculator();
        assertEquals(10, calculator.add(7, 3));
    }

    @Test
    void testSubtract() {
        Calculator calculator = new Calculator();
        assertEquals(4, calculator.subtract(7, 3));
    }
}
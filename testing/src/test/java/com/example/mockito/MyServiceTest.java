package testing.src.test.java.com.example.mockito;


import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
void testVerifyInteraction() {

    // Create mock
    ExternalApi mockApi = mock(ExternalApi.class);

    // Create service
    MyService service = new MyService(mockApi);

    // Call method
    service.fetchData();

    // Verify interaction
    verify(mockApi).getData();
}
}
package src.module2.employeemanagement;

public class EmployeeManagement {

    Employee[] employees = new Employee[10];
    int count = 0;

    // Add Employee
    void addEmployee(Employee e) {
        if (count < employees.length) {
            employees[count++] = e;
        }
    }

    // Search Employee
    Employee searchEmployee(int id) {
        for (int i = 0; i < count; i++) {
            if (employees[i].employeeId == id)
                return employees[i];
        }
        return null;
    }

    // Traverse Employees
    void displayEmployees() {
        for (int i = 0; i < count; i++) {
            System.out.println(
                employees[i].employeeId + " " +
                employees[i].name + " " +
                employees[i].position + " " +
                employees[i].salary
            );
        }
    }

    // Delete Employee
    void deleteEmployee(int id) {
        for (int i = 0; i < count; i++) {
            if (employees[i].employeeId == id) {

                for (int j = i; j < count - 1; j++) {
                    employees[j] = employees[j + 1];
                }

                employees[count - 1] = null;
                count--;
                break;
            }
        }
    }

    public static void main(String[] args) {

        EmployeeManagement em = new EmployeeManagement();

        em.addEmployee(new Employee(101, "Disha", "Developer", 50000));
        em.addEmployee(new Employee(102, "Rahul", "Tester", 40000));

        System.out.println("Employees:");
        em.displayEmployees();

        Employee e = em.searchEmployee(101);
        System.out.println("\nFound: " + e.name);

        em.deleteEmployee(102);

        System.out.println("\nAfter Delete:");
        em.displayEmployees();
    }
}
package src.module2.taskmanageement;

public class TaskManager {

    private static class Node {
        Task task;
        Node next;

        Node(Task task) {
            this.task = task;
        }
    }

    private Node head;
    private int size;

    public void addTask(Task task) {
        Node newNode = new Node(task);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
        size++;
    }

    public boolean deleteTask(int taskId) {
        Node current = head;
        Node previous = null;

        while (current != null) {
            if (current.task.taskId == taskId) {
                if (previous == null) {
                    head = current.next;
                } else {
                    previous.next = current.next;
                }
                size--;
                return true;
            }
            previous = current;
            current = current.next;
        }
        return false;
    }

    public void traverseTasks() {
        Node current = head;
        while (current != null) {
            Task t = current.task;
            System.out.println(t.taskId + " - " + t.title + " [" + t.status + "] : " + t.description);
            current = current.next;
        }
    }

    public Task findTask(int taskId) {
        Node current = head;
        while (current != null) {
            if (current.task.taskId == taskId) {
                return current.task;
            }
            current = current.next;
        }
        return null;
    }

    public int getSize() {
        return size;
    }

    public static void main(String[] args) {
        TaskManager manager = new TaskManager();

        manager.addTask(new Task(1, "Design UI", "Create wireframes for dashboard.", "Pending"));
        manager.addTask(new Task(2, "Implement backend", "Build REST endpoints for tasks.", "In Progress"));
        manager.addTask(new Task(3, "Write tests", "Cover task manager logic with unit tests.", "Pending"));

        System.out.println("Tasks after addition:");
        manager.traverseTasks();

        System.out.println("\nDeleting task 2...");
        manager.deleteTask(2);

        System.out.println("\nTasks after deletion:");
        manager.traverseTasks();

        Task found = manager.findTask(3);
        if (found != null) {
            System.out.println("\nFound task: " + found.taskId + " - " + found.title + " [" + found.status + "] : " + found.description);
        } else {
            System.out.println("\nFound task: Not found");
        }
        System.out.println("Total tasks: " + manager.getSize());
    }
}

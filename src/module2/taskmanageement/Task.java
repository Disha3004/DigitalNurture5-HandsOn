package src.module2.taskmanageement;

public class Task {
    int taskId;
    String title;
    String description;
    String status;

    public Task(int taskId, String title, String description, String status) {
        this.taskId = taskId;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

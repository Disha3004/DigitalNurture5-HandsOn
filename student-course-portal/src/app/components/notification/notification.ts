import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.html',
  styleUrl: './notification.css',
  providers: [NotificationService],
})
export class NotificationComponent {
  protected readonly message: string;

  constructor(private readonly notificationService: NotificationService) {
    this.message = this.notificationService.getMessage();
  }
}

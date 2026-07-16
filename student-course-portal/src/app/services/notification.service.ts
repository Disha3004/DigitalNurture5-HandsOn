import { Injectable } from '@angular/core';

@Injectable()
export class NotificationService {
  getMessage(): string {
    return 'This notification service instance is local to the component.';
  }
}

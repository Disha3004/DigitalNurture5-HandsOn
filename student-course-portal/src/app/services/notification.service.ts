import { Injectable } from '@angular/core';

// Component-level providers: this service is provided only inside the
// NotificationComponent so the component gets its own local instance.
@Injectable()
export class NotificationService {
  getMessage(): string {
    return 'This notification service instance is local to the component.';
  }
}

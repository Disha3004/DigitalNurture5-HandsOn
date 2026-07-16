import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingCount = 0;
  private readonly loadingSubject = new BehaviorSubject(false);
  readonly loading$ = this.loadingSubject.asObservable();

  show(): void {
    this.loadingCount += 1;
    this.loadingSubject.next(this.loadingCount > 0);
  }

  hide(): void {
    this.loadingCount = Math.max(0, this.loadingCount - 1);
    this.loadingSubject.next(this.loadingCount > 0);
  }

  isLoading(): boolean {
    return this.loadingCount > 0;
  }
}

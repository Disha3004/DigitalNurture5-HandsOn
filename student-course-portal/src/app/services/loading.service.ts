import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingCount = 0;

  show(): void {
    this.loadingCount += 1;
  }

  hide(): void {
    this.loadingCount = Math.max(0, this.loadingCount - 1);
  }

  isLoading(): boolean {
    return this.loadingCount > 0;
  }
}

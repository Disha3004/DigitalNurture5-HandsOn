import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit, OnDestroy {
  protected studentName = 'Disha';
  protected courseName = 'Angular';
  protected courseCount = 12;
  protected isEnrolled = true;

  ngOnInit(): void {
    console.log('HomeComponent Initialized');
  }

  ngOnDestroy(): void {
    console.log('HomeComponent Destroyed');
  }

  protected enrollNow(): void {
    alert(`Successfully enrolled in ${this.courseName}`);
  }
}

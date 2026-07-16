import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CanComponentDeactivate } from '../../guards/unsaved-changes.guard';

@Component({
  selector: 'app-enrollment-page',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './enrollment.html',
  styleUrl: './enrollment.css',
})
export class EnrollmentPage implements CanComponentDeactivate {
  protected enrollForm: FormGroup;
  protected submitted = false;

  constructor(private readonly fb: FormBuilder) {
    this.enrollForm = this.fb.group({
      studentName: ['', Validators.required],
      courseCode: ['', Validators.required],
      notes: [''],
    });
  }

  canDeactivate(): boolean {
    return !this.enrollForm.dirty || this.submitted;
  }

  protected onSubmit(): void {
    if (this.enrollForm.valid) {
      this.submitted = true;
      this.enrollForm.markAsPristine();
      alert(`Enrollment submitted for ${this.enrollForm.value.studentName}`);
      this.enrollForm.reset();
    }
  }
}

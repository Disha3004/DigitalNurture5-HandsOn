import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { debounceTime, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-reactive-enrollment-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reactive-enrollment-form.html',
  styleUrl: './reactive-enrollment-form.css',
})
export class ReactiveEnrollmentForm implements OnInit {
  protected enrollForm!: FormGroup;
  protected successMessage = '';

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.enrollForm = this.fb.group({
      studentName: ['', [Validators.required, Validators.minLength(3)]],
      studentEmail: ['', [Validators.required, Validators.email], [this.emailTakenValidator()]],
      courseId: ['', [Validators.required, this.noCourseCodeValidator]],
      preferredSemester: ['', Validators.required],
      agreeToTerms: [false, Validators.requiredTrue],
      additionalCourses: this.fb.array([]),
    });
  }

  protected get additionalCourses(): FormArray {
    return this.enrollForm.get('additionalCourses') as FormArray;
  }

  protected addAnotherCourse(): void {
    this.additionalCourses.push(this.fb.control('', Validators.required));
  }

  protected removeCourse(index: number): void {
    this.additionalCourses.removeAt(index);
  }

  protected onSubmit(): void {
    if (this.enrollForm.valid) {
      console.log('enrollForm.value', this.enrollForm.value);
      console.log('enrollForm.getRawValue()', this.enrollForm.getRawValue());
      this.successMessage = 'Enrollment submitted successfully!';
      this.enrollForm.reset({
        studentName: '',
        studentEmail: '',
        courseId: '',
        preferredSemester: '',
        agreeToTerms: false,
        additionalCourses: [],
      });
    } else {
      this.enrollForm.markAllAsTouched();
      this.successMessage = '';
    }
  }

  protected getErrorMessage(controlName: string): string[] {
    const control = this.enrollForm.get(controlName);
    if (!control || !control.touched || control.valid) {
      return [];
    }

    const messages: string[] = [];

    if (control.hasError('required')) {
      messages.push('This field is required.');
    }
    if (control.hasError('minlength')) {
      messages.push('Minimum length is 3.');
    }
    if (control.hasError('email')) {
      messages.push('Please enter a valid email.');
    }
    if (control.hasError('noCourseCode')) {
      messages.push('Course codes starting with XX are not allowed.');
    }
    if (control.hasError('emailTaken')) {
      messages.push('This email is already registered.');
    }

    return messages;
  }

  protected getArrayErrorMessage(index: number): string[] {
    const control = this.additionalCourses.at(index);
    if (!control || !control.touched || control.valid) {
      return [];
    }

    const messages: string[] = [];
    if (control.hasError('required')) {
      messages.push('Additional course is required.');
    }
    return messages;
  }

  private noCourseCodeValidator(control: AbstractControl): ValidationErrors | null {
    const value = String(control.value ?? '').trim();
    if (value.startsWith('XX')) {
      return { noCourseCode: true };
    }
    return null;
  }

  private emailTakenValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const value = String(control.value ?? '').trim();
      if (!value) {
        return of(null);
      }

      return of(value).pipe(
        debounceTime(800),
        map((email) => (email.includes('test@') ? { emailTaken: true } : null))
      );
    };
  }
}

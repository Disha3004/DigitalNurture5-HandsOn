import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CourseCard } from './course-card';
import { Course } from '../../models/course.model';
import { EnrollmentService } from '../../services/enrollment.service';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let enrollmentService: jasmine.SpyObj<EnrollmentService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('EnrollmentService', ['isEnrolled', 'enroll', 'unenroll']);

    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [{ provide: EnrollmentService, useValue: spy }],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    enrollmentService = TestBed.inject(EnrollmentService) as jasmine.SpyObj<EnrollmentService>;

    component.course = {
      id: 1,
      name: 'Angular Basics',
      code: 'ANG1',
      credits: 3,
      gradeStatus: 'pending',
    } as Course;

    enrollmentService.isEnrolled.and.returnValue(false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course input data', () => {
    const title = fixture.debugElement.query(By.css('h3')).nativeElement.textContent;
    expect(title).toContain('Angular Basics');
  });

  it('should toggle enrollment state', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    expect(enrollmentService.enroll).toHaveBeenCalledWith(1);
  });
});

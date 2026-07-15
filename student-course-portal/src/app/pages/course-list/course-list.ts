import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Course {
  id: number;
  title: string;
  instructor: string;
  duration: string;
  price: number;
  category: string;
  startDate: string;
  rating: number;
  isAvailable: boolean;
}

@Component({
  selector: 'app-course-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList {
  protected readonly courses: Course[] = [
    {
      id: 1,
      title: 'Angular Fundamentals',
      instructor: 'Asha Rao',
      duration: '6 weeks',
      price: 4999,
      category: 'Web Development',
      startDate: '2026-08-01',
      rating: 4.8,
      isAvailable: true,
    },
    {
      id: 2,
      title: 'React Mastery',
      instructor: 'Ravi Mehra',
      duration: '5 weeks',
      price: 4599,
      category: 'Web Development',
      startDate: '2026-08-15',
      rating: 4.3,
      isAvailable: true,
    },
    {
      id: 3,
      title: 'Spring Boot Essentials',
      instructor: 'Dinesh Kumar',
      duration: '7 weeks',
      price: 5499,
      category: 'Programming',
      startDate: '2026-09-01',
      rating: 4.6,
      isAvailable: false,
    },
    {
      id: 4,
      title: 'Java for Professionals',
      instructor: 'Neha Singh',
      duration: '8 weeks',
      price: 5999,
      category: 'Programming',
      startDate: '2026-09-10',
      rating: 4.2,
      isAvailable: true,
    },
    {
      id: 5,
      title: 'Python Data Science',
      instructor: 'Mohan Das',
      duration: '6 weeks',
      price: 4899,
      category: 'Programming',
      startDate: '2026-10-01',
      rating: 4.9,
      isAvailable: true,
    },
    {
      id: 6,
      title: 'SQL for Beginners',
      instructor: 'Pooja Verma',
      duration: '4 weeks',
      price: 2999,
      category: 'Database',
      startDate: '2026-07-20',
      rating: 4.1,
      isAvailable: false,
    },
  ];

  protected searchText = '';
  protected selectedCategory = 'All';
  protected showAvailableOnly = false;

  protected get filteredCourses(): Course[] {
    return this.courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesCategory = this.selectedCategory === 'All' || course.category === this.selectedCategory;
      const matchesAvailability = !this.showAvailableOnly || course.isAvailable;
      return matchesSearch && matchesCategory && matchesAvailability;
    });
  }
}

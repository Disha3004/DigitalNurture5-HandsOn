import { Routes } from '@angular/router';
import { unsavedChangesGuard } from '../../guards/unsaved-changes.guard';
import { EnrollmentPage } from './enrollment';

export const enrollmentRoutes: Routes = [{ path: '', component: EnrollmentPage, canDeactivate: [unsavedChangesGuard] }];

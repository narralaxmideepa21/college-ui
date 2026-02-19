import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { SignupService } from './signup';
import { SignupComponent } from './signup/signup';

import { StudentComponent } from './student/student';
import { Department } from './department/department';
import { Courses } from './courses/courses';
import { Faculty } from './faculty/faculty';
import { Logincms } from './logincms/logincms';
import { Dashboard } from './dashboard/dashboard';
import { Authguard } from './auth.guard';

export const routes: Routes = [
    //  { path: '', redirectTo: 'login', pathMatch: 'full' },
    //  { path: 'login', component: LoginComponent },
    // { path: 'signup', component: SignupComponent },
      // { path: '', component: CmsCardComponent}
      { path: 'login', component:Logincms },
      
      { path: 'dashboard', component: Dashboard, canActivate: [Authguard] },

      { path: 'students', component: StudentComponent, canActivate: [Authguard] },
      { path: 'departments', component: Department, canActivate: [Authguard] },
      { path: 'courses', component: Courses, canActivate: [Authguard] },
      { path: 'faculty', component: Faculty, canActivate: [Authguard] },

      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
];

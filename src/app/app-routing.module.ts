import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout.component';
import { AuthGuardService } from './shared/middlewares/auth-guard.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MainPageComponent } from './core/components/main-page/main-page.component';
import { CourseIndexComponent } from './components/course/course-index/course-index.component';
import { LectureIndexComponent } from './components/lecture-index/lecture-index.component';
import { LectureShowComponent } from './components/lecture-show/lecture-show.component';
import { AssigmentIndexComponent } from './components/assigment-index/assigment-index.component';
import { QuestionIndexComponent } from './components/question/question-index/question-index.component';
import { QuestionCategoryIndexComponent } from './components/question-category/question-category-index/question-category-index.component';
import { ExamIndexComponent } from './components/exam/exam-index/exam-index.component';
import { ExamRoomComponent } from './components/exam/exam-room/exam-room.component';
import { MyExamIndexComponent } from './components/exam/my-exam-index/my-exam-index.component';

const routes: Routes = [

  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'courses',
        component: CourseIndexComponent
      },
      {
        path: 'lectures/:id',
        component: LectureIndexComponent
      },
      {
        path: 'show-lecture',
        component: LectureShowComponent
      },
      {
        path: 'assigments',
        component: AssigmentIndexComponent
      },
      {
        path: 'question-categorys',
        component: QuestionCategoryIndexComponent
      },
      {
        path: 'questions',
        component: QuestionIndexComponent
      },
      {
        path: 'exams',
        component: ExamIndexComponent
      },
      {
        path: 'main',
        component: MainPageComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      },
      {
        path: 'exam-room/:id',
        component: ExamRoomComponent
      },
      {
        path: 'my-exams',
        component: MyExamIndexComponent
      },
     /* {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },

      {
        path: 'admin-users',
        loadChildren: './admin-users/admin-users.module#AdminUsersModule'
      },
      {
        path: 'app-users',
        loadChildren: './app-users/app-users.module#AppUsersModule'
      },
      {
        path: '**',
        component: PageNotFoundComponent,
        // redirectTo: 'dashboard',
        pathMatch: 'full'
      }*/
    ]
  },
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    // redirectTo: 'admin',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        useHash: true,
        scrollPositionRestoration: 'enabled'
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

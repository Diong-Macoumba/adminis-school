import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { StudentInfoComponent } from './Components/student/student-info/student-info.component';
import {HttpClientModule} from "@angular/common/http";
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { CreateClassComponent } from './Components/classroom/create-class/create-class.component';
import { ClassListComponent } from './Components/classroom/class-list/class-list.component';
import { CreateStudentComponent } from './Components/student/create-student/create-student.component';
import {FormsModule} from "@angular/forms";
import { StudentDetailsComponent } from './Components/student/student-details/student-details.component';
import { UpdateClassComponent } from './Components/classroom/update-class/update-class.component';
import { UpdateStudentComponent } from './Components/student/update-student/update-student.component';
import { TeacherListComponent } from './Components/teacher/teacher-list/teacher-list.component';
import { TeacherDetailComponent } from './Components/teacher/teacher-detail/teacher-detail.component';
import { CreateTeacherComponent } from './Components/teacher/create-teacher/create-teacher.component';
import { UpdateTeacherComponent } from './Components/teacher/update-teacher/update-teacher.component';
import { CreateCourseComponent } from './Components/course/create-course/create-course.component';
import { ListCourseComponent } from './Components/course/list-course/list-course.component';
import { UpdateCourseComponent } from './Components/course/update-course/update-course.component';
import { CreateExamComponent } from './Components/exam/create-exam/create-exam.component';
import { ListExamComponent } from './Components/exam/list-exam/list-exam.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentInfoComponent,
    NavBarComponent,
    CreateClassComponent,
    ClassListComponent,
    CreateStudentComponent,
    StudentDetailsComponent,
    UpdateClassComponent,
    UpdateStudentComponent,
    TeacherListComponent,
    TeacherDetailComponent,
    CreateTeacherComponent,
    UpdateTeacherComponent,
    CreateCourseComponent,
    ListCourseComponent,
    UpdateCourseComponent,
    CreateExamComponent,
    ListExamComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

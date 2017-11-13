import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';

import {StudentService} from './student.service';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

import {SubjectService} from './subject.service';
import { SubjectComponent } from './subject/subject.component';
import { HomeComponent } from './home/home.component';
import { SubjectDetailComponent } from './subject-detail/subject-detail.component';
import { SubjectEditComponent } from './subject-edit/subject-edit.component';
import { SubjectCreateComponent } from './subject-create/subject-create.component';


const ROUTES = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'student-details/:id', component: StudentDetailComponent},
  { path: 'student-create', component: StudentCreateComponent},
  { path: 'student-edit/:id', component: StudentEditComponent},
  {path: 'subject-details/:id', component: SubjectDetailComponent},
  {path: 'subject-edit/:id', component: SubjectEditComponent},
  {path: 'subject-create', component: SubjectCreateComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    StudentDetailComponent,
    StudentCreateComponent,
    StudentEditComponent,
    SubjectComponent,
    HomeComponent,
    SubjectDetailComponent,
    SubjectEditComponent,
    SubjectCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [StudentService, SubjectService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

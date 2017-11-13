import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../subject.service";
import {StudentService} from "../student.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css']
})
export class SubjectEditComponent implements OnInit {

  subject: {};
  students: any;

  constructor(private subjectService: SubjectService, private router: Router, private route: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit() {
    this.getSubject(this.route.snapshot.params['id']);
    this.getStudentsList();
  }

  getSubject(id) {
    this.subjectService.showSubject(id).then((res) => {
      this.subject = res;
      console.log(this.subject);
    }, (err) => {
      console.log(err);
    });
  }

  updateSubject(id) {
    this.subjectService.updateSubject(id, this.subject).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/subject-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

  deleteStudent(idsubject, idstudent) {
    this.subjectService.deleteStudentFromSubject(idsubject, idstudent).then((result) => {
      this.getSubject(this.route.snapshot.params['id']);
    }, (err) => {
      console.log(err);
    });
  }

  getStudentsList() {
    this.studentService.getAllStudents().then((res) => {
      this.students = res;
    }, (err) => {
      console.log(err);
    });
  }

  addStudent(idsubject, idstudent) {
    this.subjectService.addStudentToSubject(idsubject, idstudent).then((result) => {
      this.getSubject(this.route.snapshot.params['id']);
      this.getStudentsList();
    }, (err) => {
      console.log(err);
    });
  }
}

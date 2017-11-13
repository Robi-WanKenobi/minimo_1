import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  student = {};

  constructor(private route: ActivatedRoute, private studentService: StudentService, private router: Router) { }

  ngOnInit() {
    this.getStudentDetail(this.route.snapshot.params['id']);
  }

  getStudentDetail(id) {
    this.studentService.showStudent(id).then((res) => {
      this.student = res;
      console.log(this.student);
    }, (err) => {
      console.log(err);
    });
  }

  deleteStudent(id) {
    this.studentService.deleteStudent(id).then((result) => {
      this.router.navigate(['/home']);
    }, (err) => {
      console.log(err);
    });
  }

}

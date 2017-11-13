import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student: {};

  constructor(private studentService: StudentService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getStudent(this.route.snapshot.params['id']);
  }

  getStudent(id) {
    this.studentService.showStudent(id).then((res) => {
      this.student = res;
      console.log(this.student);
    }, (err) => {
      console.log(err);
    });
  }

  updateStudent(id) {
    this.studentService.updateStudent(id, this.student).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/student-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}

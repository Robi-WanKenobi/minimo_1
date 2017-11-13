import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {StudentService} from "../student.service";

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student = {};

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
  }

  saveStudent() {
    this.studentService.saveStudent(this.student).then((result) => {
      const id = result['_id'];
      this.router.navigate(['/student-details', id]);
    }, (err) => {
      console.log(err);
    });
  }

}

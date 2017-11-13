import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SubjectService } from "../subject.service";

@Component({
  selector: 'app-subject-create',
  templateUrl: './subject-create.component.html',
  styleUrls: ['./subject-create.component.css']
})
export class SubjectCreateComponent implements OnInit {

  subject: {};

  constructor(private subjectService: SubjectService, private router: Router) { }

  ngOnInit() {
  }

  saveSubject() {
    this.subjectService.saveSubject(this.subject).then((result) => {
      const id = result['_id'];
      this.router.navigate(['/subject-details', id]);
    }, (err) => {
      console.log(err);
    });
  }
}

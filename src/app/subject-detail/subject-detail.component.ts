import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {SubjectService} from "../subject.service";

@Component({
  selector: 'app-subject-detail',
  templateUrl: './subject-detail.component.html',
  styleUrls: ['./subject-detail.component.css']
})
export class SubjectDetailComponent implements OnInit {

  subject: {};

  constructor(private subjectService: SubjectService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getSubjectDetail(this.route.snapshot.params['id']);
  }

  getSubjectDetail(id) {
    this.subjectService.showSubject(id).then((res) => {
      this.subject = res;
      console.log(this.subject);
    }, (err) => {
      console.log(err);
    });
  }

  deleteSubject(id) {
    this.subjectService.deleteSubject(id).then((result) => {
      this.router.navigate(['/home']);
    }, (err) => {
      console.log(err);
    });
  }
}

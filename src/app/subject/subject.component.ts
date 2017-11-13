import { Component, OnInit } from '@angular/core';
import {SubjectService} from "../subject.service";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: any;
  nombre_filter: String;
  estudios_filter: String;
  cuatri_filter: String;

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubjectList();
    this.nombre_filter = null;
    this.estudios_filter = null;
    this.cuatri_filter = null;
  }

  getSubjectList() {
    this.subjectService.getAllSubjects().then((res) => {
      this.subjects = res;
    }, (err) => {
      console.log(err);
    });
  }

  filterNombre() {
    this.subjectService.showSubject_byName(this.nombre_filter).then((res) => {
      this.subjects = res;
    }, (err) => {
      console.log(err);
    });
  }

  filterEstudios() {
    this.subjectService.showSubject_byEstudios(this.estudios_filter).then((res) => {
      this.subjects = res;
    }, (err) => {
      console.log(err);
    });
  }

  filterCuatri() {
    this.subjectService.showSubject_byCuatri(this.cuatri_filter).then((res) => {
      this.subjects = res;
    }, (err) => {
      console.log(err);
    });
  }

  sortByName(){
    this.subjectService.showSubjectSorted().then((res) => {
      this.subjects = res;
    }, (err) => {
      console.log(err);
    });
  }
}

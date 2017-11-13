import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  constructor(private http: Http) { }

  getAllStudents() {
    return new Promise((resolve, reject) => {
      this.http.get('/student')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showStudent(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/student/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  saveStudent(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/student', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateStudent(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put('/student/' + id, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteStudent(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('/student/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}

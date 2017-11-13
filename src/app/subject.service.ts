import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SubjectService {

  constructor(private http: Http) { }

  getAllSubjects() {
    return new Promise((resolve, reject) => {
      this.http.get('/subject')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showSubject(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/subject/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showSubjectSorted() {
    return new Promise((resolve, reject) => {
      this.http.get('/subject/sorted')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showSubject_byName(name) {
    return new Promise((resolve, reject) => {
      this.http.get('/subject/filter_nombre/' + name)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  showSubject_byEstudios(name) {
    return new Promise((resolve, reject) => {
      this.http.get('/subject/filter_estudios/' + name)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  showSubject_byCuatri(name) {
    return new Promise((resolve, reject) => {
      this.http.get('/subject/filter_cuatri/' + name)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  saveSubject(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/subject', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  updateSubject(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put('/subject/' + id, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteSubject(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('/subject/' + id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  deleteStudentFromSubject(id, idstudent) {
    return new Promise((resolve, reject) => {
      this.http.put('/subject/' + id + '/students/' + idstudent, null)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  addStudentToSubject(id, idstudent) {
    return new Promise((resolve, reject) => {
      this.http.post('/subject/' + id + '/students/' + idstudent, null)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}



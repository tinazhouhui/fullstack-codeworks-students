import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../interfaces/student";

@Injectable({
  providedIn: 'root'
})
export class StudentApiService {

  rootUrl = 'http://localhost:3000/'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
  }

  constructor(private http: HttpClient) {
  }

  getStudents(): Observable<any> {
    return this.http.get(`${this.rootUrl}students`)
  }

  saveStudent(newStudent: Student): Observable<string> {
    return this.http.post<string>(`${this.rootUrl}student`, newStudent, this.httpOptions)
  }

  deleteStudent(id: string) {
    const httDeleteOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        id
      }
    }
    return this.http.delete(`${this.rootUrl}student`, httDeleteOptions)
  }
}

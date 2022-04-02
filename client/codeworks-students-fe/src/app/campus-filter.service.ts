import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Student} from "../interfaces/student";
import {StudentApiService} from "./student-api.service";

@Injectable({
  providedIn: 'root'
})
export class CampusFilterService {
  public studentAll: Student[] = []
  public studentFiltered$: BehaviorSubject<Student[]> = new BehaviorSubject<Student[]>([])

  constructor(private studentApi: StudentApiService) { }

  // set all students
  initialFetch (): void {
    this.studentApi.getStudents()
      .subscribe(res => {
        this.studentAll = res
        this.studentFiltered$.next(this.studentAll)
      }); // SEMICOLON
  }

  //set filtered students
  setFilterStudents(filter: string): void {
    this.studentFiltered$.next(this.studentAll.filter(student => student.campus.includes(filter)))
  }
}

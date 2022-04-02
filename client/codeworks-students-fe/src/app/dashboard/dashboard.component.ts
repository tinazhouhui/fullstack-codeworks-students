import { Component, OnInit } from '@angular/core';
import {StudentApiService} from "../student-api.service";
import {Student} from "../../interfaces/student";
import {CampusFilterService} from "../campus-filter.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  students: Student[] = [];
  campai: string[] = [];

  constructor(private studentApi: StudentApiService, private campusFilter: CampusFilterService) { }

  ngOnInit(): void {
    this.setStudents()
  }

  setStudents () {
    this.campusFilter.studentFiltered$.subscribe(students => {
      this.students = students
      this.campai = this.getCampuses()
    })
  }

   getCampuses(): string[] {
    const allCampai = this.campusFilter.studentAll.map(student => student.campus);
    return [...new Set(allCampai)]
  }
}

import { Component, OnInit } from '@angular/core';
import {StudentApiService} from "../student-api.service";
import {Student} from "../../interfaces/student";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  allStudents: Student[] = [];
  campai: string[] = [];

  constructor(private studentApi: StudentApiService) { }

  ngOnInit(): void {
    this.getAllStudents()
  }

  getAllStudents(){
    this.studentApi.getStudents()
      .subscribe(res => {
        this.allStudents = res
        this.campai = this.getCampuses()
      })
  }

   getCampuses(): string[] {
    return this.allStudents.map(student => student.campus);
  }

}

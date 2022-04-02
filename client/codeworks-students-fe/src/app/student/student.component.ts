import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../interfaces/student";
import {StudentApiService} from "../student-api.service";
import {CampusFilterService} from "../campus-filter.service";

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  @Input()
  student!: Student;

  constructor(private studentApi: StudentApiService, private campusFilter: CampusFilterService) { }

  ngOnInit(): void { }

  deleteMe () {
    this.studentApi.deleteStudent(this.student._id)
      .subscribe(response => {
        if (response) {
          this.campusFilter.initialFetch()
        }
      });
  }

}

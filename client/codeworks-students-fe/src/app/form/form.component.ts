import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {StudentApiService} from "../student-api.service";
import {CampusFilterService} from "../campus-filter.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newStudent = this.formBuilder.group({
    id: [8, Validators.required],
    name: ['Gabriele', Validators.required],
    campus: ['Barcelona', Validators.required],
    age: [23, Validators.required],
    junior: false,
  })

  constructor(private formBuilder: FormBuilder, private studentApi: StudentApiService, private campusFilter: CampusFilterService) { }

  ngOnInit(): void {
    // this.newStudent.valueChanges
    //   .subscribe(form => console.log(form))
  }

  handleSubmit () {
    console.log('button click')
    this.studentApi.saveStudent(this.newStudent.value)
      .subscribe(res => {
        console.log('saving')
        console.log(res)
        this.campusFilter.initialFetch()
      });  // gotta subscribe
    this.newStudent.reset()
  }




}

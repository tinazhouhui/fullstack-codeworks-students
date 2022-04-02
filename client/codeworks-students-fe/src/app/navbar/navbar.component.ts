import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../interfaces/student";
import {CampusFilterService} from "../campus-filter.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  campai!: string[];

  constructor(private campusFilter: CampusFilterService) { }

  ngOnInit(): void {
  }

  showAll() {
    this.campusFilter.setFilterStudents('')
  }



}

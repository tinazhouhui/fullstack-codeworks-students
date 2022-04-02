import {Component, OnInit} from '@angular/core';
import {CampusFilterService} from "./campus-filter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private campusFilter: CampusFilterService) {}

  ngOnInit(): void {
    this.campusFilter.initialFetch()
  }

  title = 'codeworks-students-fe';
}

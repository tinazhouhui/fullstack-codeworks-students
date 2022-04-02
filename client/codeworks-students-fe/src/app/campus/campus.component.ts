import {Component, Input, OnInit} from '@angular/core';
import {CampusFilterService} from "../campus-filter.service";

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {
  // campus: string = "tenerife"

  @Input()
  campus!: string

  constructor(private campusFilter: CampusFilterService) { }

  ngOnInit(): void {
  }

  filterCampus($event: any) {
    console.log(this.campus)
    console.log($event)
    this.campusFilter.setFilterStudents(this.campus)
  }

}

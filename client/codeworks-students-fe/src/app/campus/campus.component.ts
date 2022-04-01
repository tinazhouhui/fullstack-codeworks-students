import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-campus',
  templateUrl: './campus.component.html',
  styleUrls: ['./campus.component.css']
})
export class CampusComponent implements OnInit {
  // campus: string = "tenerife"

  @Input()
  campus!: string

  constructor() { }

  ngOnInit(): void {
  }

}

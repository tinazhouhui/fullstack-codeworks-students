import {Component, Input, OnInit} from '@angular/core';
import {Student} from "../../interfaces/student";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  campai!: string[];

  constructor() { }

  ngOnInit(): void {
  }



}

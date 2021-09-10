import { Component, OnInit } from '@angular/core';
import { RACES } from '../mock-races';
import { Race } from '../race';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {

  races : Array<Race>;
  constructor() {
    this.races = RACES;
  }

  ngOnInit(): void {
  }

}

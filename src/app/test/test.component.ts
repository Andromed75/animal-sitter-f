import { Component, OnInit } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { DateAdapter } from '@angular/material/core';
import { type } from 'os';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  events: Date;
  test: string;
  picker: any;

  constructor(private _adapter: DateAdapter<any>) { }

  ngOnInit() {
    this._adapter.setLocale('fr');
  }

  log() {
    console.log(new Date(this.events.setHours(1)).toUTCString());

  }

  changeFormat() {
    this.events = new Date(this.events.setHours(1));
    this.test = this.events.toUTCString();
    console.log(this.test);
  }


}

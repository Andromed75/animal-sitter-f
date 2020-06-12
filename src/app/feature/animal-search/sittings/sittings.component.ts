import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sittings',
  templateUrl: './sittings.component.html',
  styleUrls: ['./sittings.component.scss']
})
export class SittingsComponent implements OnInit {

  @Input() sitting: any;

  constructor() { }

  ngOnInit() {
  }

}

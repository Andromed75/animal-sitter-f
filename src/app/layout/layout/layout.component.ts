import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input() username: string;
  @Input() isLoggedIn: boolean;
  @Input() id: string;

  constructor() { }

  ngOnInit() {
    console.log('Layout, id = ' + this.id);

  }

}

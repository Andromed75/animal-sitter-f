import { Component, OnInit, Input } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-navtest',
  templateUrl: './navtest.component.html',
  styleUrls: ['./navtest.component.scss'],
})
export class NavtestComponent implements OnInit {

  @Input() username: string;
  @Input() isLoggedIn: boolean;


  constructor(private tokenService: TokenStorageService) {}

  ngOnInit() {

    if (this.username === null || this.username === undefined || this.username === '') {
      this.username = 'Se connecter';
    }

  }

  uncheck() {
    document.getElementById('nav-check').click();
  }


  logout() {
    this.tokenService.signOut();
    window.location.reload();
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoginDto } from 'src/app/models/auth.model';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  request: LoginDto = new LoginDto('', '');
  isSuccessful = false;
  isFailed = false;
  isLoggedIn = false;
  roles: string[] = [];


  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  login() {
    this.authService.login(this.request).subscribe(
      data => {
        console.log(data);
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        console.log(err);
      }
    );
  }

  reloadPage() {
    window.location.reload();
  }

}

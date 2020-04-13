import { Component, OnInit } from '@angular/core';
import { SignUpDto } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-creation',
  templateUrl: './account-creation.component.html',
  styleUrls: ['./account-creation.component.scss']
})
export class AccountCreationComponent implements OnInit {

  request: SignUpDto = new SignUpDto('', '', '');
  errorMessage = '';
  isSuccessful  = false;
  isFailed = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  auth() {
    this.authService.register(this.request).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        setTimeout(() => this.isSuccessful = false, 3000);


      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
        setTimeout(() => this.isFailed = false, 3000);
      }
    );
  }

}



import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserDetails } from 'src/app/models/response/userDetails.model';
import { Animal, Sickness } from 'src/app/models/animal.model';
import { Disponibility } from 'src/app/models/disponibility.model';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { HomeComponent } from 'src/app/home/home.component';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  isLoggedIn = false;
  animals: Animal[];
  disponibility: Disponibility[];
  autocompleteResult: any;
  addressForAutocomplete = '';
  address: Address = new Address('', '', '', '', '');
  user: UserDetails = new UserDetails('', '', '', '', '', this.address,  this.animals, this.disponibility);

  constructor(private route: ActivatedRoute, private userService: UserService, private tokenStorageService: TokenStorageService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    console.log('IS LOGGED IN :' + this.isLoggedIn);

    if(!this.isLoggedIn) {
      this.router.navigateByUrl('/');
    }
    this.getUserDetails(this.route.snapshot.params.id);
  }

  getUserDetails(id: string) {
    this.userService.getUserDetails(id).subscribe(
      data => {
        console.log(data);
        this.user = data;
        console.log(this.user);



      },
      err => {
        console.log(err);

      }
    );
  }

  autocomplete(){
    console.log(this.addressForAutocomplete);

    if (this.addressForAutocomplete.length % 3 === 0) {
      this.userService.autocomplete(this.addressForAutocomplete).subscribe(x => this.autocompleteResult = x, err => console.log(err));
    }
  }



}

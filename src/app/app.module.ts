import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepicker, MatDatepickerContent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { authInterceptorProviders } from './auth/auth.interceptor';
import { HomeComponent } from './home/home.component';
import { AccountCreationComponent } from './feature/account-creation/account-creation.component';
import { AnimalSearchComponent } from './feature/animal-search/animal-search.component';
import { LoginComponent } from './feature/login/login.component';
import { AccountComponent } from './feature/account/account.component';
import { ErrorComponent } from './feature/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HomeComponent,
    AccountCreationComponent,
    AnimalSearchComponent,
    LoginComponent,
    AccountComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    // AngularFireModule.initializeApp(environment.firebase),
 	  // AngularFirestoreModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

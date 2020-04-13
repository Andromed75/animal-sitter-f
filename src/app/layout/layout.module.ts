import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { NavtestComponent } from './navtest/navtest.component';



@NgModule({
  declarations: [LayoutComponent, NavbarComponent, NavtestComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }

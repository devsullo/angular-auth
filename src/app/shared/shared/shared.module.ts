import { AuthComponent } from './../../auth/auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserAreaComponent } from 'src/app/user-area/user-area.component';

@NgModule({
  declarations: [
    AuthComponent,
    UserAreaComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class SharedModule { }

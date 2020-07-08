import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent implements OnInit {

  username: string = '';
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  public onSignIn() {
    this.http.post(environment.apiUrl + '/login', { username: this.username })
    .subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['/user-area']);
    })
  }

}

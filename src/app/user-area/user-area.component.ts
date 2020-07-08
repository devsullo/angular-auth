import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-area',
  templateUrl: './user-area.component.html',
  styleUrls: ['./user-area.component.sass']
})
export class UserAreaComponent implements OnInit {
  public user: any;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  public onGetUser() {
    this.http.get(environment.apiUrl + '/getUser').subscribe((user: any) => {
      this.user = user;
    })
  }

}

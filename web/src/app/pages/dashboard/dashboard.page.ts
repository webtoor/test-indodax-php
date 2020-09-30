import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userData;
  constructor(public httpService: AuthService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(){
    this.httpService.GetRequest('user').subscribe(res => {
      console.log(res);
      if(res.status == 200){
        this.userData = res.data
      }
    });
  }
}

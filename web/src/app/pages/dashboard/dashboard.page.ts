import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  userData;
  transaction;
  user_id;
  constructor(public httpService: AuthService) { 
    const userData = JSON.parse(localStorage.getItem('indodax-laravel'));
    this.user_id = userData["user_id"]
    console.log(this.user_id)
  }

  ngOnInit() {
    this.getUser();
    this.getTransaction()
  }

  getUser(){
    this.httpService.GetRequest('user').subscribe(res => {
      console.log(res);
      if(res.status == 200){
        this.userData = res.data
      }
    });
  }

  getTransaction(){
    this.httpService.GetRequest('transaction').subscribe(res => {
      console.log(res);
      if(res.status == 200){
        this.transaction = res.data
      }
    });
  }
}

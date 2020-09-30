import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  transaction;
  user_id;
  constructor(public httpService: AuthService) { 
    const userData = JSON.parse(localStorage.getItem('indodax-laravel'));
    this.user_id = userData["user_id"]
  }

  ngOnInit() {
  }

  ionViewWillEnter(){
    this.getTransaction()
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

import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { EventsService } from 'src/app/services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  emailShow :string;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/dashboard',
      icon: 'home'
    },
    {
      title: 'Transfer',
      url: '/create-transaction',
      icon: 'paper-plane'
    },  
    {
      title: 'History Transaksi',
      url: '/transaction',
      icon: 'mail'
    },
    {
      title: 'Tentang Apps',
      url: '/about',
      icon: 'information-circle'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public events : EventsService
  ) {
    const token = JSON.parse(localStorage.getItem('indodax-laravel'));
    if(token){
      this.emailShow = token.email;
    }
    this.events.subscribe('email', (email) => {
      this.emailShow = email;
      console.log(this.emailShow);
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  
  }
}

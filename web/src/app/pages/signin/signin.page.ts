import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  signInForm: FormGroup;
  submitted = false;
  showPassword = false;
  passwordToggleIcon = "eye"; 
  constructor(public toastController: ToastController, public menu: MenuController, private formBuilder: FormBuilder) { 
    this.menu.enable(false);
  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      'username' : [null, [Validators.required]],
      'password' : [null, Validators.required],
    });  
  }

  onSubmit() {
    this.submitted = true;
    if (this.signInForm.invalid) {
        return;
    }
    console.log(this.signInForm.value)
   /*  this.loading.present();
    this.authService.PostSignIn(this.signInForm.value, 'signin').subscribe(res => {
      //console.log(res)
      if(res.access_token) {
        localStorage.setItem('vuenic-pwa', JSON.stringify(res));
        this.events.publish('email', res.email);
        this.router.navigate(['/tabs/dashboard'], {replaceUrl: true});
        this.loading.dismiss();
      }else if(res.error){
        this.presentToast('Anda memasukkan Email dan Password yang salah. Isi dengan data yang benar dan coba lagi',);
        this.loading.dismiss();
      }
    }); */
  }

  get f() { return this.signInForm.controls; }
  togglePassword(){
    this.showPassword = !this.showPassword
    if(this.passwordToggleIcon == "eye"){
      this.passwordToggleIcon = "eye-off";
    }else{
      this.passwordToggleIcon = "eye";
    }
  }

}

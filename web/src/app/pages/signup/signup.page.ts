import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpForm: FormGroup;
  submitted = false;
  showPassword = false;
  passwordToggleIcon = "eye";
  constructor(private formBuilder: FormBuilder, public menu: MenuController, public router : Router, public authService : AuthService) {
    this.menu.enable(false);
  }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      'username' : [null, Validators.required],
      'email' : [null, [Validators.required, Validators.email]],
      'password' : [null, Validators.required],
      'password_confirmation' : [null],
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
        return;
    }
    this.signUpForm.patchValue({
      password_confirmation :this.signUpForm.value.password
    })
    
    console.log(this.signUpForm.value)
    this.authService.PostSignUp(this.signUpForm.value, 'signup').subscribe(res => {
      console.log(res)
      if(res.status == 201) {
        
      }else if(res.error){
      }
    });
  }

  get f() { return this.signUpForm.controls; }

  signinPage(){
    this.router.navigate(['/signin'])
  }

  togglePassword(){
    this.showPassword = !this.showPassword
    if(this.passwordToggleIcon == "eye"){
      this.passwordToggleIcon = "eye-off";
    }else{
      this.passwordToggleIcon = "eye";
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
    this.form = this.fb.group(
      {
        usuario: ['', Validators.required],
        password: ['', Validators.required],
      }
    )
  }

  ngOnInit(): void {
  }

  login(){
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    //console.log(usuario);
    //console.log(password);
    
    if(usuario == 'admin' && password == 'admin123'){
      //Redirect to dashboard (If connected to BackEnd POST)
      this.fakeLoading();
    } else {
      //Show error msj
      this.error();
      this.form.reset();
    }
  }

  error(){
    this._snackBar.open('Invalid Username or Password!', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    })
  }

  fakeLoading(){
    this.loading = true;
    setTimeout(() => {
      //Redirect to Dashboard
      this.router.navigate(['dashboard'])
    }, 1500);
  }

}

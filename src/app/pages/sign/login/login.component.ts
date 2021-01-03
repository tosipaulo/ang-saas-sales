import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SignService } from '../sign.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  load: boolean = false;

  constructor(
    private fb: FormBuilder,
    private signService: SignService,
    private router: Router,
    private snackBar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  onSubmit() {
    if(this.loginForm.valid) {
      this.load = true;
      this.signService.login(this.loginForm.value).subscribe(
        (user) => {
          this.router.navigate(['clientes']);
        },
        (error: HttpErrorResponse) => {
          this.load = false;
          this.snackBar.open(`${error['error']['message']}`, '❌', {
            duration: 3000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: 'lib-snackbar'
          });
        }
      )
    }
  }

}

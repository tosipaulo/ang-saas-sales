import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SignService } from '../sign.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {

  resetForm: FormGroup;
  load: boolean = false;
  resetPassword = false;
  token: string;

  constructor(
    private fb: FormBuilder,
    private signService: SignService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['']
    });

    this.route.queryParams.subscribe(params => {
      if(params.token && params.email) {
        this.resetForm.get('email').setValue(params.email)
        this.resetPassword = true;
        this.token = params.token;
        this.resetForm.get('password').setValidators(Validators.required);
      }
    });
  }

  onSubmit() {
    if(this.resetForm.valid) {
      this.load = true;

      if(!this.resetPassword) {
        this.signService.reset(this.resetForm.value).subscribe(
          (res) => {
            this.resetForm.reset();
            this.load = false;
            this.snackBar.open(`${res['message']}`, '🥰', {
              duration: 6000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: 'lib-snackbar'
            });
          },
          (error: HttpErrorResponse) => {
            this.load = false;
            this.resetForm.reset();
            this.snackBar.open(`${error['error']['message']}`, '❌', {
              duration: 4000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: 'lib-snackbar'
            });
          }
        )
      }else {
        this.signService.newPassword({...this.resetForm.value, token: this.token})
          .subscribe(
            (res) => {
              this.resetForm.reset();
              this.load = false;
              this.resetPassword = false;
              this.snackBar.open(`${res['message']}`, '🥰', {
                duration: 6000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: 'lib-snackbar'
              });
            },
            (error: HttpErrorResponse) => {
              this.load = false;
              this.resetPassword = false;
              this.resetForm.reset();
              this.snackBar.open(`${error['error']['message']}`, '❌', {
                duration: 4000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: 'lib-snackbar'
              });
            }
          )
      }
    }
  }

}

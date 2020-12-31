import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SignService } from '../sign.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  load: boolean = false;

  constructor(
    private fb: FormBuilder,
    private signService: SignService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      name: ['', Validators.required]
    })
  }

  onSubmit() {
    if(this.registerForm.valid) {
      this.load = true;
      this.signService.register(this.registerForm.value).subscribe(
        (res) => {
          this.snackBar.open(`${res['message']}`, '🥰', {
            duration: 6000,
          });
          this.load = false;
          this.registerForm.reset();
        },
        (error: HttpErrorResponse) => {
          this.load = false;
          this.snackBar.open(`Ops! Aconteceu algum problema`, '❌', {
            duration: 3000,
          });
        }
      )
    }
  }

}

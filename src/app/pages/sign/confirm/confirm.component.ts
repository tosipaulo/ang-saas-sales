import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SignService } from '../sign.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  message: string;

  constructor(
    private route: ActivatedRoute,
    private signService: SignService,
    ) { }

  ngOnInit(): void {
    const token = this.route.snapshot.paramMap.get("token");
    this.signService.confirm(token).subscribe(
      (res) => {
        this.message = res['message'];
      },
      (error: HttpErrorResponse) => {
        console.log(error['error']['message'])
        this.message = error['error']['message'];
      }
    )
  }

}

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "lib-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"]
})
export class InputComponent implements OnInit {

  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}

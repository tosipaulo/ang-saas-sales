import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {

  @Input() large: boolean = false;
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(value: SimpleChanges) {
    const valueChange = value['disabled'];
    this.disabled = valueChange.currentValue;
  }

}

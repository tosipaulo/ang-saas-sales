import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'button[lib-button], a[lib-button], lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

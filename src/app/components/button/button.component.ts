import { ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'button[lib-button], a[lib-button], lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent implements OnInit, OnChanges {

  @Input() large: boolean = false;
  @Input() disabled: boolean = false;
  @Input() load: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.classList.add('lib-button');

    if(this.large) {
      this.elementRef.nativeElement.classList.add('lib-button__large');
    }
  }

  ngOnChanges(value: SimpleChanges) {
    const valueChange = value['disabled'];
    if(valueChange && valueChange.currentValue) {
      this.elementRef.nativeElement.classList.add('lib-button__disabled');
    }else {
      this.elementRef.nativeElement.classList.remove('lib-button__disabled');
    }

  }

}

import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: "lib-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.scss"],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() title: string;
  @Input() formName: FormGroup;
  @Input() formInputName: string;
  @Input() type: string = 'text';
  @Input() readonly: boolean = false;

  onChanged: any = () => {}
  onTouched: any = () => {}

  constructor() {}

  writeValue(obj: any): void {
    console.log("writeValue", obj);
  }
  registerOnChange(fn: any): void {
    this.onChanged = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

}

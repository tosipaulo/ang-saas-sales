import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { InputComponent } from "./input.component";

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, MatInputModule, MatFormFieldModule],
  exports: [InputComponent],
})
export class InputModule {}

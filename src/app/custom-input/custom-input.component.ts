import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { InputmaskOptions } from '@ngneat/input-mask';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.css']
})
export class CustomInputComponent {

  @Input() formControl!: FormControl;
  @Input() inputMask!: InputmaskOptions<any>;
  @Input() placeholder: string | undefined;

}

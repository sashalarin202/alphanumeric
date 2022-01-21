import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dateInputMask = createMask<void>({
    // inputFormat: 'dd-mm-yyyy',
    mask: "****",
    definitions:{
      '*': {
        validator: "[0-9A-Za-z]",
      }}
  });
  dateFC = new FormControl('');
}

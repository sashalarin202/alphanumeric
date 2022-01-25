import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  codemask = createMask<void>({
    mask: "****",
    definitions:{
      '*': {
        validator: "[0-9A-Za-z]",
      }}
  });
  codeForm = new FormControl('');
}

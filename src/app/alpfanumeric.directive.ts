import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlpfanumeric]'
})
export class AlpfanumericDirective {
//private regex: RegExp = new RegExp('^[0-9]*$');
private regex: RegExp = new RegExp("^[a-zA-Z0-9_]*$");  //Decimal Number
private specialKeys: Array<string> = ['Backspace','ArrowLeft','ArrowRight'];
constructor(private elementRef: ElementRef) { }


/**
 * Key board action
 * @param event
 */
@HostListener('keydown', ['$event'])onKeyDown(event: KeyboardEvent) {
  if (this.specialKeys.indexOf(event.key) !== -1) {
    return;
  }
  const inputValue: string = this.elementRef.nativeElement.value.concat(event.key);
  console.log(event.key);
  if (inputValue && !String(inputValue).match(this.regex)) {
    event.preventDefault();
  }

  return;
}

}

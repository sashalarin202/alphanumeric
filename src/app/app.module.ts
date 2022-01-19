import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AlpfanumericDirective } from './alpfanumeric.directive';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AlpfanumericDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

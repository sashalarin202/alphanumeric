import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { InputMaskModule } from '@ngneat/input-mask';
import { AlpfanumericDirective } from './alpfanumeric.directive';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { MainComponent } from './main/main.component';
import { CustomInputComponent } from './custom-input/custom-input.component';


@NgModule({
  declarations: [
    AppComponent,
    AlpfanumericDirective,
    PanelComponent,
    MainComponent,
    CustomInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    InputMaskModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

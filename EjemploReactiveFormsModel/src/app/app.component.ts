import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModelComponent } from './components/reactive-forms-model/reactive-forms-model.component';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EjemploReactiveFormsModel';
}

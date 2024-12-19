import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentListComponent } from "./componets/student-list/student-list.component";

@Component({
  selector: 'app-root',
  imports: [StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AppAngularService';
}

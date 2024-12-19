import { Component } from '@angular/core';
import { ControlFlowIfComponent } from './components/control-flow-if/control-flow-if.component';
import { ControlFlowForComponent } from "./components/control-flow-for/control-flow-for.component";
import { ControlflowSwitchComponent } from "./components/controlflow-switch/controlflow-switch.component";

@Component({
  selector: 'app-root',
  imports: [ControlFlowIfComponent, ControlFlowForComponent, ControlflowSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'EjemploControlFlow';
}

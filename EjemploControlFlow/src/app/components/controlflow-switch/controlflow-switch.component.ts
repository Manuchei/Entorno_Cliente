import { Component } from '@angular/core';

@Component({
  selector: 'app-controlflow-switch',
  imports: [],
  templateUrl: './controlflow-switch.component.html',
  styleUrl: './controlflow-switch.component.css'
})
export class ControlflowSwitchComponent {

  roles: string[];
  role: string;
  
  constructor(){
    this.roles = ["admin", "editor", "suscriptor", "otros"];
    this.role = this.roles[0];
  }
  
  ngOnInit(): void{
    //Llamada al servicio
  }

}

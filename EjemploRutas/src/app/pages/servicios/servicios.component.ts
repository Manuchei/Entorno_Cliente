import { ServiciosService } from './../../services/servicios.service';
import { Component, inject } from '@angular/core';
import { Servicios } from '../../interfaces/servicio';
import { ServiceCardComponent } from "../../components/service-card/service-card.component";

@Component({
  selector: 'app-servicios',
  imports: [ServiceCardComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  misServicios: Servicios[];

  serviciosService = inject(ServiciosService);

  constructor(){
    this.misServicios = [];
  }

  ngOnInit(): void{
    this.misServicios = this.serviciosService.getAll();
  }

}

import { ActivatedRoute } from '@angular/router';
import { SeriesService } from './../../services/series.service';
import { Component, inject } from '@angular/core';
import { Serie } from '../../interfaces/serie';
import { BotoneraComponent } from "../../components/botonera/botonera.component";

@Component({
  selector: 'app-series-view',
  imports: [BotoneraComponent],
  templateUrl: './series-view.component.html',
  styleUrl: './series-view.component.css',
})
export class SeriesViewComponent {
  SeriesService = inject(SeriesService);
  activatedRoute = inject(ActivatedRoute);

  miSerie!: Serie;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(async (paramas: any) => {
      let _id: string = paramas._id as string;

      try {
        this.miSerie = await this.SeriesService.getById(_id)
      } catch (err) {
        console.log("Error al llamar a la API: "+err)
      }
    });
  }
}

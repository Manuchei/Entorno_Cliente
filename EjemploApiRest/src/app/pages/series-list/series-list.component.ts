import { Component, inject } from '@angular/core';
import { Serie } from '../../interfaces/serie';
import { SeriesService } from '../../services/series.service';
import { SerieCardComponent } from '../../components/serie-card/serie-card.component';

@Component({
  selector: 'app-series-list',
  imports: [SerieCardComponent],
  templateUrl: './series-list.component.html',
  styleUrl: './series-list.component.css',
})
export class SeriesListComponent {
  arrSeries: Serie[];
  serieService = inject(SeriesService);

  constructor() {
    this.arrSeries = [];
  }

  async ngOnInit(): Promise<void> {
    //Usando Observables
    // this.serieService.getAllWithObservables().subscribe((data: Serie[]) => {
    //   this.arrSeries = data;
  // });

    //Usando Promesas
    try {
      this.arrSeries = await this.serieService.getAllWithPromises();
    } catch (err) {
      console.log('Error al inicializar la API: ' + err);
    }
  }
}

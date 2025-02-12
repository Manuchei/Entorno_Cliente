import { HeroService } from './../../services/hero.service';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IHero } from '../../interfaces/ihero';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  heroList: IHero[];
  HeroService = inject(HeroService);

  constructor() {
    this.heroList = [];
  }

  ngOnInit(): void {}
}

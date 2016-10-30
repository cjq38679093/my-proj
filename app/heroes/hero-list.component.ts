import { Component } from '@angular/core';
import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'hero-list',
	templateUrl: './hero-list.component.html'
})

export class HeroListComponent {
	heroes: Hero[];
  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }
}

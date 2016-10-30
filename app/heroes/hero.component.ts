import { Component } from '@angular/core';
import { HeroService } from './hero.service';
import { HeroServiceProvider } from './hero.service.provider';

@Component({
	moduleId: module.id,
	selector: 'my-heroes',
	templateUrl: './hero.component.html',
	providers: [HeroServiceProvider]
})
export class HeroesComponent { }

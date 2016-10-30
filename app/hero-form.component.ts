import { Component } from '@angular/core';

import { Hero } from './hero';

@Component({
	moduleId: module.id,
	selector: 'hero-form',
	templateUrl: 'hero-form.component.html'
})
export class HeroFormComponent {
	title = 'Template <script>alert("evil never sleeps")</script>Syntax';

	powers = ['realy 1', 'power2', 'power3', 'power4'];

	model = new Hero(1, 'Ken', this.powers[0], 'whether changer');

	submitted = false;

	onSubmit() { this.submitted = true; }

	active = true;

	newHero() {
		this.model = new Hero(42, '', '');
		this.active = false;
		setTimeout(() => this.active = true, 0);
	}

	get diagnostic() { return JSON.stringify(this.model) };
}
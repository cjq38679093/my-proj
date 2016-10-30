import { Component } from '@angular/core';

@Component({
	selector: 'click-me',
	template: `
	<button type="button" class="btn btn-default" (click)="OnClickMe()">button</button>
	{{clickMessage}}`
})

export class ClickMeComponent {
	clickMessage = '';
	
	clickOnMe(){
		this.clickMessage = 'You are my hero';
	}
}
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { Logger } from './logger.service';
import { UserService } from './user.service';
import { HeroFormComponent }  from './hero-form.component';

import { HeroesComponent }  from './heroes/hero.component';
import { HeroListComponent }  from './heroes/hero-list.component';

import { User } from './user';



@NgModule({
	imports: [
		BrowserModule,
		FormsModule
	],
	declarations: [
		AppComponent,
		HeroFormComponent,
		HeroesComponent,
		HeroListComponent
	],
	bootstrap: [AppComponent],
	providers: [Logger, UserService, {provide: User, useValue: {name: 'KenChen', isAuthorized:true}}]
})
export class AppModule { }

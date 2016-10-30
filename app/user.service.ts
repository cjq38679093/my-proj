import { Injectable } from '@angular/core';

import { User } from './user';

@Injectable()
export class UserService {
	constructor(public user: User) {
		// user.name = 'KenChen';
		// user.isAuthorized = true;
	}
}
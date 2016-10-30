import { Logger } from '../logger.service';
import { UserService } from '../user.service';
import { HeroService } from './hero.service';

let heroServiceFactory = (logger: Logger, userService: UserService) => {
	return new HeroService(logger, userService.user.isAuthorized);
}

export let HeroServiceProvider =
	{
		provide: HeroService,
		useFactory: heroServiceFactory,
		deps: [Logger, UserService]
	};
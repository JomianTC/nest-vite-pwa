import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { USERS_DATA } from './data/users-data';

@Injectable()
export class SeedService {

	constructor(
		private readonly usersService: UsersService,
	){}

	executeSeed() {
		this.usersService.populateUsers( USERS_DATA );
		return 'Seed ejecutada';
	}
}

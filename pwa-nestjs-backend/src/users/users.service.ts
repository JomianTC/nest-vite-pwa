import { BadRequestException, Injectable } from "@nestjs/common";

import { v4 as uuid } from "uuid";

import { CreateUserDto, UpdateUserDto } from "./dto";
import { User } from "./entities/user.entity";

@Injectable()
export class UsersService {

	private usersRegistered: User[] = [];

	findAll() {
		return this.usersRegistered;
	}
	
	findOne( id: string ) {

		const userFound = this.usersRegistered.find( user => user.id === id );

		if ( !userFound )
			throw new BadRequestException( `El usuario con id: ${ id } no existe` );

		return userFound;
	}
	
	create( createUserDto: CreateUserDto ) {
		
		const user: User = { id: uuid(), ...createUserDto }
		this.usersRegistered.push( user );
				
		return {
			mensaje: "Usuario creado exitosamente",
			user
		};
	}

	update( id: string, updateUserDto: UpdateUserDto ) {
		
		let userFound = this.findOne( id );

		this.usersRegistered = this.usersRegistered.map( user => {
			if ( user.id === id ) {
				userFound = { ...user, ...updateUserDto, id };
				return userFound;
			}

			return user;
		})

		return {
			mensaje: "Usuario actualizado exitosamente",
			userFound
		}
	}

	remove( id: string ) {
		
		const userFound = this.findOne( id );
		this.usersRegistered = this.usersRegistered.filter( user => user.id !== id )

		return userFound;
	}

	populateUsers( users: User[] ) {
		this.usersRegistered = users;
	}
}

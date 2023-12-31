import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto, UpdateUserDto } from "./dto";

@Controller("users")
export class UsersController {

	constructor( private readonly usersService: UsersService ) { }
	
	@Get()
	findAll() {
		return this.usersService.findAll();
	}
	
	@Get( ":id" )
	findOne( @Param( "id", ParseUUIDPipe ) id: string ) {
		return this.usersService.findOne( id );
	}
	
	@Post()
	create( @Body() createUserDto: CreateUserDto ) {
		return this.usersService.create(createUserDto);
	}

	@Patch( ":id" )
	update( @Param( "id", ParseUUIDPipe ) id: string, @Body() updateUserDto: UpdateUserDto) {
		return this.usersService.update(id, updateUserDto);
	}

	@Delete( ":id" )
	remove( @Param( "id", ParseUUIDPipe ) id: string ) {
		return this.usersService.remove( id );
	}
}

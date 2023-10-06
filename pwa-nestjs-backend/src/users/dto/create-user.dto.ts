import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {

	@IsString({ message: "El nombre debe ser un string" })
	@MinLength( 1, { message: "El nombre debe tener al menos 10 caracteres" } )
	name: string;
	
	@IsString({ message: "El email debe ser un string" })
	@IsEmail({}, { message: "El email debe ser un email valido" })
	@MinLength( 1, { message: "El email debe tener al menos 10 caracteres" } )
	email: string;
}

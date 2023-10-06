import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class UpdateUserDto {

	@IsString({ message: "El nombre debe ser un string" })
	@MinLength( 1, { message: "El nombre debe tener al menos 10 caracteres" } )
	@IsOptional()
	name: string;
	
	@IsString({ message: "El email debe ser un string" })
	@IsEmail({}, { message: "El email debe ser un email valido" })
	@MinLength( 1, { message: "El email debe tener al menos 10 caracteres" } )
	@IsOptional()
	email: string;
}

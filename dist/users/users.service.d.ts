import { CreateUserDto, UpdateUserDto } from "./dto";
import { User } from "./entities/user.entity";
export declare class UsersService {
    private usersRegistered;
    findAll(): User[];
    findOne(id: string): User;
    create(createUserDto: CreateUserDto): {
        mensaje: string;
        user: User;
    };
    update(id: string, updateUserDto: UpdateUserDto): {
        mensaje: string;
        userFound: User;
    };
    remove(id: string): User;
    populateUsers(users: User[]): void;
}

import { UsersService } from "./users.service";
import { CreateUserDto, UpdateUserDto } from "./dto";
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): import("./entities/user.entity").User[];
    findOne(id: string): import("./entities/user.entity").User;
    create(createUserDto: CreateUserDto): {
        mensaje: string;
        user: import("./entities/user.entity").User;
    };
    update(id: string, updateUserDto: UpdateUserDto): {
        mensaje: string;
        userFound: import("./entities/user.entity").User;
    };
    remove(id: string): import("./entities/user.entity").User;
}

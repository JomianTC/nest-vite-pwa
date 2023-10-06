"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let UsersService = class UsersService {
    constructor() {
        this.usersRegistered = [];
    }
    findAll() {
        return this.usersRegistered;
    }
    findOne(id) {
        const userFound = this.usersRegistered.find(user => user.id === id);
        if (!userFound)
            throw new common_1.BadRequestException(`El usuario con id: ${id} no existe`);
        return userFound;
    }
    create(createUserDto) {
        const user = { id: (0, uuid_1.v4)(), ...createUserDto };
        this.usersRegistered.push(user);
        return {
            mensaje: "Usuario creado exitosamente",
            user
        };
    }
    update(id, updateUserDto) {
        let userFound = this.findOne(id);
        this.usersRegistered = this.usersRegistered.map(user => {
            if (user.id === id) {
                userFound = { ...user, ...updateUserDto, id };
                return userFound;
            }
            return user;
        });
        return {
            mensaje: "Usuario actualizado exitosamente",
            userFound
        };
    }
    remove(id) {
        const userFound = this.findOne(id);
        this.usersRegistered = this.usersRegistered.filter(user => user.id !== id);
        return userFound;
    }
    populateUsers(users) {
        this.usersRegistered = users;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    register(body: {
        username: string;
        password: string;
    }): Promise<string | import("./user.entity").User>;
    login(body: {
        username: string;
        password: string;
    }): Promise<string | import("./user.entity").User>;
}

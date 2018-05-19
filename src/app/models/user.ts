import {Role} from "./role";

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    roles: Array<Role>;
    confirmationToken: string;
    banned: boolean;
    enabled: boolean;
    // token: string;
    profileImg =  'http://res.cloudinary.com/profunding/image/upload/v1505580510/default-user-image.jpg';
}

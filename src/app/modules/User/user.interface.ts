import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export type TUserRole = keyof typeof USER_ROLE;

export interface TUser {
    name: string;
    email: string;
    password: string;
    phone?: string;
    address?: string;
    role: TUserRole;
}

export interface UserModel extends Model<TUser> {
    // myStaticMethod(): number;
    isUserExistsByEmail(email: string): Promise<TUser>;
    isPasswordMatched(
        plainTextPassword: string,
        hashedPassword: string
    ): Promise<boolean>;
}

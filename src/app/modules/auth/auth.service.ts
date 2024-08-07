import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TLoginUser } from "./auth.interface";
import config from "../../config";
import { createToken } from "./auth.utils";
import { User } from "../User/user.model";

const loginUser = async (payload: TLoginUser) => {
    //checking if the user is exists
    const user = await User.isUserExistsByEmail(payload.email);
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, "This user is not found");
    }

    //checking if the password is correct
    if (!(await User.isPasswordMatched(payload?.password, user?.password)))
        throw new AppError(httpStatus.FORBIDDEN, "Password do not matched!");

    //create token and sent to the client
    const jwtPayload = {
        email: user.email,
        role: user.role,
    };
    const accessToken = createToken(
        jwtPayload,
        config.jwt_access_secret as string,
        config.jwt_access_expires_in as string
    );

    return {
        accessToken,
        user: await User.findOne({ email: user.email }),
    };
};

export const AuthServices = {
    loginUser,
};

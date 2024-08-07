import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import AppError from "../errors/AppError";
import httpStatus from "http-status";
import jwt, { JwtPayload } from "jsonwebtoken";
import config from "../config";
import { TUserRole } from "../modules/User/user.interface";
import { User } from "../modules/User/user.model";

const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(
        async (req: Request, res: Response, next: NextFunction) => {
            const tokenWithBearer = req.headers.authorization;

            //if the token is sent from the client
            if (!tokenWithBearer) {
                throw new AppError(
                    httpStatus.UNAUTHORIZED,
                    "You are not authorized"
                );
            }

            const token = tokenWithBearer.split(" ")[1];

            //check if the token is valid
            const decoded = jwt.verify(
                token,
                config.jwt_access_secret as string
            ) as JwtPayload;

            const { role, email } = decoded;

            const user = await User.isUserExistsByEmail(email);
            if (!user) {
                throw new AppError(
                    httpStatus.NOT_FOUND,
                    "This user is not found"
                );
            }

            if (requiredRoles && !requiredRoles.includes(role)) {
                throw new AppError(
                    httpStatus.UNAUTHORIZED,
                    "You are not authorized"
                );
            }

            //decoded
            req.user = decoded as JwtPayload;
            next();
        }
    );
};

export default auth;

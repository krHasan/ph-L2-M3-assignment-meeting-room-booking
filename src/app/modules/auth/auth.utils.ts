import jwt from "jsonwebtoken";
import config from "../../config";

export const createToken = (
    jwtPayload: { email: string; role: string },
    secret: string,
    expiresIn: string
) => {
    return jwt.sign(jwtPayload, secret, { expiresIn });
};

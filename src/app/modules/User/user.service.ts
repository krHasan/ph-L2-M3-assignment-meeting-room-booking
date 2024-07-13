import mongoose from "mongoose";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";

const createUserIntoDB = async (payload: TUser) => {
    const session = await mongoose.startSession();
    try {
        session.startTransaction();

        const user = await User.isUserExistsByEmail(payload.email);
        if (user) {
            throw new AppError(
                httpStatus.NOT_FOUND,
                "An user is already exists with this email"
            );
        }

        const newUser = await User.create([payload], { session });
        if (!newUser) {
            throw new AppError(httpStatus.BAD_REQUEST, "Failed to create user");
        }

        await session.commitTransaction();
        await session.endSession();
    } catch (error: any) {
        await session.abortTransaction();
        await session.endSession();
        throw new Error(error);
    }
};

export const UserService = {
    createUserIntoDB,
};

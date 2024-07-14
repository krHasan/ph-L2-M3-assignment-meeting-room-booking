import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserService } from "./user.service";

const createUser = catchAsync(async (req, res) => {
    const newUser = await UserService.createUserIntoDB(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User registered successfully",
        data: newUser,
    });
});

export const UserController = {
    createUser,
};

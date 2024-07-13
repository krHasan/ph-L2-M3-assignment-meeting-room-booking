import express from "express";
import { AuthControllers } from "./auth.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AuthValidation } from "./auth.validation";
import { UserValidations } from "../User/user.validation";
import { UserController } from "../User/user.controller";

const router = express.Router();

router.post(
    "/login",
    validateRequest(AuthValidation.loginValidationSchema),
    AuthControllers.loginUser
);

router.post(
    "/signup",
    validateRequest(UserValidations.createUserValidationSchema),
    UserController.createUser
);

export const AuthRoutes = router;

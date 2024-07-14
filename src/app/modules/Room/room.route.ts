import express from "express";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "../User/user.constant";
import validateRequest from "../../middlewares/validateRequest";
import { RoomValidations } from "./room.validation";
import { RoomController } from "./room.controller";

const router = express.Router();

router.post(
    "/",
    auth(USER_ROLE.admin),
    validateRequest(RoomValidations.createRoomValidationSchema),
    RoomController.createRoom
);
router.get("/:id", RoomController.getRoomById);
router.get("/", RoomController.getAllRooms);
router.put(
    "/:id",
    auth(USER_ROLE.admin),
    validateRequest(RoomValidations.updateRoomValidationSchema),
    RoomController.updateRoom
);
router.delete("/:id", auth(USER_ROLE.admin), RoomController.deleteRoom);

export const RoomRouters = router;

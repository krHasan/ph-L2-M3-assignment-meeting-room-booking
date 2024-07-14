import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { RoomRouters } from "../modules/Room/room.route";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/rooms", RoomRouters);

export default router;

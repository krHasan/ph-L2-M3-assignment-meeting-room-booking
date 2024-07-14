import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { RoomService } from "./room.service";

const createRoom = catchAsync(async (req, res) => {
    const result = await RoomService.createRoomIntoDB(req.body);

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "Room added successfully",
        data: result,
    });
});

const getRoomById = catchAsync(async (req, res) => {
    const result = await RoomService.getRoomById(req.params.id);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User registered successfully",
        data: result,
    });
});

const getAllRooms = catchAsync(async (req, res) => {
    const result = await RoomService.getAllRoomsFromDB();
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: "User registered successfully",
        data: result,
    });
});

const updateRoom = catchAsync(async (req, res) => {});

const deleteRoom = catchAsync(async (req, res) => {});

export const RoomController = {
    createRoom,
    getRoomById,
    getAllRooms,
    updateRoom,
    deleteRoom,
};

import { TRoom } from "./room.interface";
import { Room } from "./room.model";

const createRoomIntoDB = async (payload: TRoom) => {
    const result = await Room.create(payload);
    return result;
};

const getRoomById = async (id: string) => {
    const result = await Room.findById(id);
    return result;
};

const getAllRoomsFromDB = async () => {
    const result = await Room.find();
    return result;
};

const updateRoomIntoDB = async (id: string, payload: Partial<TRoom>) => {};

const deleteRoomIntoDB = async (id: string) => {
    const result = await Room.findByIdAndUpdate(
        id,
        {
            isDeleted: true,
        },
        { new: true }
    );
};

export const RoomService = {
    createRoomIntoDB,
    getRoomById,
    getAllRoomsFromDB,
    updateRoomIntoDB,
    deleteRoomIntoDB,
};

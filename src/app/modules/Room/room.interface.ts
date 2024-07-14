/* 
name: The name of the meeting room.
roomNo : The unique number of the room.
floorNo : The level of the meeting room where it is located.
capacity: The maximum number of people the room can accommodate.
pricePerSlot: The individual cost of a single slot.
amenities: An array of amenities available in the room (e.g., "Projector", "Whiteboard"). Don't use enum.
isDeleted: Boolean to indicates whether the room has been marked as deleted (false means it is not deleted).
*/

export type TRoom = {
    name: string;
    roomNo: number;
    floorNo: number;
    capacity: number;
    pricePerSlot: number;
    amenities: string[];
    isDeleted: boolean;
};

import { z } from "zod";

const createRoomValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, { message: "Room name is required" }).trim(),
        roomNo: z
            .number()
            .int()
            .nonnegative({
                message: "Room number must be a non-negative integer",
            }),
        floorNo: z
            .number()
            .int()
            .nonnegative({
                message: "Floor number must be a non-negative integer",
            }),
        capacity: z
            .number()
            .int()
            .positive({ message: "Capacity must be a positive integer" }),
        pricePerSlot: z
            .number()
            .positive({ message: "Price per slot must be a positive number" }),
        amenities: z.array(
            z.string().min(1, { message: "Amenities are required" })
        ),
        isDeleted: z.boolean().default(false),
    }),
});

const updateRoomValidationSchema = z.object({
    body: z.object({
        name: z.string().trim().optional(),
        roomNo: z.string().trim().optional(),
        floorNo: z.string().optional(),
        capacity: z
            .number()
            .int()
            .positive({ message: "Capacity must be a positive integer" })
            .optional(),
        pricePerSlot: z
            .number()
            .positive({ message: "Price per slot must be a positive number" })
            .optional(),
        amenities: z.array(z.string()).optional(),
        isDeleted: z.boolean().optional(),
    }),
});

export const RoomValidations = {
    createRoomValidationSchema,
    updateRoomValidationSchema,
};

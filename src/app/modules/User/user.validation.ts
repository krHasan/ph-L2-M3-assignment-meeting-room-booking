import { z } from "zod";

const createUserValidationSchema = z.object({
    body: z.object({
        name: z.string().min(1, { message: "Name is required" }),
        email: z
            .string()
            .email({ message: "{VALUE} is not a valid email type" })
            .min(1, { message: "Email is required" }),
        password: z
            .string()
            .max(20)
            .min(1, { message: "Password is required" }),
        phone: z.string().optional(),
        address: z.string().optional(),
        role: z.enum(["user", "admin"], {
            errorMap: () => ({ message: "{VALUE} is not valid" }),
        }),
    }),
});

export const UserValidations = {
    createUserValidationSchema,
};

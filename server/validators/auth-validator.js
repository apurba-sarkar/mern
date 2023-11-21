const { z } = require("zod");

// creating a user object schema

const signUpSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be least of 3 characters" })
    .max(255, { message: "Name must not be more than 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .min(3, { message: "Email not valid" })
    .max(255, { message: "Email must not be more than 255 characters" }),

  phone: z
    .string({ required_error: "Phone no is required" })
    .trim()
    .min(10, { message: "Phone no must be least of 10 characters" })
    .max(20, { message: "Phone no must not be more than 20 characters" }),

  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(7, { message: "Password must be least of 7 characters" })
    .max(14, { message: "Password must not be more than 14 characters" }),
});

module.exports = signUpSchema;

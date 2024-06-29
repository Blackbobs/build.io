import { z } from "zod";
import { userSchema } from "./schema";

export type userType = z.infer<typeof userSchema>
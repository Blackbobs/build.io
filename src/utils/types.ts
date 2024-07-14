import { z } from "zod";
import { userSchema, emailSchema } from "./schema";

export type userType = z.infer<typeof userSchema>

export type emailType = z.infer<typeof emailSchema>

// export interface User {

// }
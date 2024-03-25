import type { User } from "@auth0/auth0-spa-js";

export type role = "admin" | "user";
export type user = NonNullable<User>;

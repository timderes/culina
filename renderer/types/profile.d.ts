import type { DefaultMantineColor } from "@mantine/core";

/**
 * A user profile in the application.
 */
declare type Profile = {
  color: DefaultMantineColor; // Color used for the fallback avatar
  firstName: string;
  lastName: string;
  uuid: string; // UUID v4 string
  createdAt: number; // UNIX Timestamp
  updatedAt: number; // UNIX Timestamp
};

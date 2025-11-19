/**
 * A user profile in the application.
 */
type Profile = {
  color: string; // Color used for the fallback avatar, saved as hex string
  firstName: string;
  lastName: string;
  uuid: string; // UUID v4 string
  createdAt: number; // UNIX Timestamp
  updatedAt: number; // UNIX Timestamp
};

import type { Profile } from "types/profile";

/**
 * Constructs the formatted full name from a Profile object.
 * @param {Profile} profile - The profile object containing firstName and lastName properties.
 * @returns {string} The formatted full name as "firstName lastName".
 */
const getFormattedName = (profile: Profile): string => {
  const { firstName, lastName } = profile;

  return `${firstName} ${lastName}`;
};

export default getFormattedName;

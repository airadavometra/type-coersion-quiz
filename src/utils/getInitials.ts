export const getInitials = (userName: string): string => {
  const [fname, lname] = userName.split(" ");
  return `${fname[0]}${lname ? lname[0] : ""}`;
};

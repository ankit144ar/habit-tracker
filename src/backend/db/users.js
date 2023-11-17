import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstname: "ankit",
    lastname: "roy",
    email: "ankit@gmail.com",
    username: "ankit144",
    password: "ankit144",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];

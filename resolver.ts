import book  from "./config/db";
import { getUsers, selected } from "./util";
export const resolvers = {
    Query: {
      books: () => getUsers(),
    },
  };
    
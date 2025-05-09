import { mockUsers } from "./constants.mjs";

export const resolveIndexByUserId = (request, response, next) => {
  const {
    params: { id },
  } = request;
  const parsedID = parseInt(id);
  if (isNaN(parsedID)) return response.sendStatus(400);

  const findUserIndex = mockUsers.findIndex((user) => user.id === parsedID);
  if (findUserIndex === -1) return response.sendStatus(404);
  request.findUserIndex = findUserIndex;
  next();
};

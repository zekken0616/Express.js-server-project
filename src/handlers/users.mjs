import { matchedData, validationResult } from "express-validator";
import { mockUsers } from "../utils/constants.mjs";
import { hashPassword } from "../utils/helpers.mjs";

export const getUserByIdHandler = (request, response) => {
  const { findUserIndex } = request;
  const findUser = mockUsers[findUserIndex];
  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
};

export const createUserHandler = async (request, response) => {
  const result = validationResult(request);
  if (!result.isEmpty()) return response.status(400).send(result.array());

  const data = matchedData(request);

  // console.log(data);
  data.password = hashPassword(data.password);
  // console.log(data);

  // const newUser = new User(data);
  // try {
  //   const savedUser = await newUser.save();
  //   return response.status(201).send(savedUser);
  // } catch (err) {
  //   // console.log(err);
  //   return response.sendStatus(400);
  // }

  // const result = validationResult(request);
  // console.log(result);
  // if (!result.isEmpty())
  //   return response.status(400).send({ errors: result.array() });
  // const data = matchedData(request);
  // const newUser = { id: mockUsers[mockUsers.length - 1].id + 1, ...data };
  // mockUsers.push(newUser);
  // return response.status(201).send(newUser);
};

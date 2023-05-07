import { Request, Response } from "express";
import { omit } from "lodash";
import { CreateUserInput } from "../schema/user.schema";
import { createUser } from "../service/user.service";
import logger from "../utils/logger";

export async function createUserHandler(
  req: Request<{}, {}, CreateUserInput["body"]>,
  res: Response
) {
  try {
    const user = await createUser(req.body);
    // return res.send(omit(user.toJSON(), "password"));
    return res.send(user);
  } catch (e: any) {
    logger.error(e);
    return res.status(409).send(e.message);
    // .setDefaultEncoding(e.message);
    // 409 for conflict ( we assume it has violated the unique field in the user model)
  }
}

export async function getCurrentUser(req: Request, res: Response) {
  return res.send(res.locals.user);
}

export async function getLog(req: Request, res: Response) {
  return res.send(console.log("getLog works", res.locals.user));
}
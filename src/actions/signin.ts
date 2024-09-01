"use server";

import { prisma } from "@/util/prisma";
import { z } from "zod";
import { Argon2id } from "oslo/password";
import { lucia } from "@/util/lucia";
import { cookies } from "next/headers";

const signin = async (
  _state: { statusCode: number; errorMessage: string },
  formData: FormData,
) => {
  const login = formData.get("login");
  const password = formData.get("password");

  if (login === null || password === null)
    return { statusCode: 1, errorMessage: "Missing values" };

  let parsedLogin;
  let parsedPassword;

  try {
    parsedLogin = z.string().min(1).parse(login);
    parsedPassword = z.string().min(1).parse(password);
  } catch (err) {
    return { statusCode: 2, errorMessage: "Invalid values; " + err };
  }

  let user;
  try {
    user = await prisma.user.findUnique({
      where: {
        username: parsedLogin,
      },
    });
  } catch (err) {
    return {
      statusCode: 3,
      errorMessage: "Unable to reach the database; " + err,
    };
  }

  if (user === null)
    return { statusCode: 4, errorMessage: "Invalid credentials" };

  const validPassword = await new Argon2id().verify(
    user.hashed_password,
    parsedPassword,
  );

  if (!validPassword)
    return { statusCode: 4, errorMessage: "Invalid credentials" };

  const session = await lucia.createSession(user.id, {});

  const sessionCookie = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  return { statusCode: 0, errorMessage: "Success" };
};

export { signin };

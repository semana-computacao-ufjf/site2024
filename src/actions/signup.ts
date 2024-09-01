"use server";

import { lucia } from "@/util/lucia";
import { prisma } from "@/util/prisma";
import { generateId } from "lucia";
import { cookies } from "next/headers";
import { Argon2id } from "oslo/password";
import { z } from "zod";

const signup = async (
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

  const hashedPassword = await new Argon2id().hash(parsedPassword);
  const userId = generateId(15);

  try {
    await prisma.user.create({
      data: {
        id: userId,
        hashed_password: hashedPassword,
        username: parsedLogin,
      },
    });
  } catch (err) {
    return { statusCode: 3, errorMessage: "Database error; " + err };
  }

  const session = await lucia.createSession(userId, {});
  const sessionCookies = lucia.createSessionCookie(session.id);
  cookies().set(
    sessionCookies.name,
    sessionCookies.value,
    sessionCookies.attributes,
  );

  return { statusCode: 0, errorMessage: "Success" };
};

export { signup };

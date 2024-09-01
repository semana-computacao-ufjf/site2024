"use server";

import { lucia, validateRequest } from "@/util/lucia";
import { cookies } from "next/headers";

const signout = async () => {
  const { session } = await validateRequest();
  if (session === null) {
    return { statusCode: 1, errorMessage: "Not currently signed in" };
  }

  await lucia.invalidateSession(session.id);

  const blankCookies = lucia.createBlankSessionCookie();
  cookies().set(blankCookies.name, blankCookies.value, blankCookies.attributes);

  return { statusCode: 0, errorMessage: "Success" };
};

export { signout };

"use client";

import { signout } from "@/actions/signout";

const SignoutButton = () => {
  return <button onClick={() => void signout()}>Sair</button>;
};

export { SignoutButton };

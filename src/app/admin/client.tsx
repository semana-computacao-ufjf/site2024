"use client";

import { signin } from "@/actions/signin";
import { signup } from "@/actions/signup";
import { useFormState } from "react-dom";

const AdminClient = () => {
  const [signinState, signinAction] = useFormState(signin, {
    statusCode: -1,
    errorMessage: "Initial state",
  });

  const [signupState, signupAction] = useFormState(signup, {
    statusCode: -1,
    errorMessage: "Initial state",
  });

  return (
    <div>
      <div>
        <form action={signinAction}>
          <div>login</div>
          <input name="login" type="text" required />
          <input name="password" type="password" required />
          <button type="submit" className="bg-red-500">
            Entrar
          </button>
        </form>
        <div>
          {signinState.statusCode !== -1 && signinState.statusCode !== 0 && (
            <div>{signinState.errorMessage}</div>
          )}
        </div>
      </div>
      <div>
        <form action={signupAction}>
          <div>criar conta</div>
          <input name="login" type="text" required />
          <input name="password" type="password" required />
          <button type="submit" className="bg-red-500">
            Criar
          </button>
        </form>
        <div>
          {signupState.statusCode !== -1 && signupState.statusCode !== 0 && (
            <div>{signupState.errorMessage}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export { AdminClient };

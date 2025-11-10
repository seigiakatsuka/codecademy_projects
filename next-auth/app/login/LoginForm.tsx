"use client";

import { useActionState } from "react";
import { login } from "./actions";

export function LoginForm() {
  const [state, loginAction, isPending] = useActionState(login, undefined);
  return (
    <form action={loginAction} className="flex max-w-[300px] flex-col gap-2">
      <div className="flex flex-col gap-2">
        <input id="email" name="email" placeholder="Email" />
      </div>
      {state?.errors?.email && (
        <p className="text-sm text-red-500">{state.errors.email}</p>
      )}

      <div className="flex flex-col gap-2">
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      {state?.errors?.password && (
        <p className="text-sm text-red-500">{state.errors.password}</p>
      )}
      <SubmitButton pending={isPending} />
    </form>
  );
}

interface SubmitButtonProps {
  pending?: boolean;
}

function SubmitButton({ pending }: SubmitButtonProps) {
  return (
    <button disabled={pending} type="submit">
      Login
    </button>
  );
}

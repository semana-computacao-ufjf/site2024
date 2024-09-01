"use client";

import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();

  return <button onClick={router.back}>voltar</button>;
};

export { BackButton };

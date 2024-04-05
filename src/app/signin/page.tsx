import Link from "next/link";

import { getServerAuthSession } from "@/server/auth";
import SigninForm from "@/components/forms/SigninForm";

const Signin = async () => {
  const session = await getServerAuthSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <SigninForm />
    </main>
  );
};

export default Signin;

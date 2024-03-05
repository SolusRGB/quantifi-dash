import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { api } from "@/utils/api";

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  const hello = api.post.hello.useQuery({ text: "from tRPC" });
  if (sessionData) {
    // Show user info and sign out button
    return (
      <div className="flex items-center gap-8">
        <p className="text-2xl text-white">
          {hello.data ? hello.data.greeting : "Loading tRPC query..."}
        </p>
        <div className="cursor-default text-sm font-medium text-sunray hover:brightness-110">
          {secretMessage && <span> {secretMessage}</span>}
          User: {sessionData.user.name}
        </div>
        <button
          className="flex items-center justify-center rounded-3xl border border-[#e6e6e6]/5 bg-sunray px-10 py-2.5 font-medium text-black transition duration-150 ease-out hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-800"
          onClick={() => signOut()}
        >
          Disconnect
        </button>
      </div>
    );
  } else {
    // Show sign in button
    return (
      <button
        className="flex items-center justify-center rounded-3xl border border-[#e6e6e6]/5 bg-sunray px-10 py-2.5 font-medium text-black transition duration-150 ease-out hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-yellow-300 dark:focus:ring-yellow-800"
        onClick={() => signIn()}
      >
        Connect
      </button>
    );
  }
};

export default AuthShowcase;

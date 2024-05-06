import React from "react";
import { useSession, signIn } from "next-auth/react";
import { api } from "@/utils/api";
import type { NextPage } from "next";
import { IndexLayout } from "@/layout/Layout";
import ProfileBanner from "@/components/profile/ProfileBanner";

/**
 * This is a dynamic page that displays the user's profile information.
 * Depending on the user's authentication status, the page will display different content:
 */
const UserProfile: NextPage = () => {
  // Get the session data and status using the useSession hook
  const { data: sessionData, status } = useSession({
    required: true,
    onUnauthenticated() {
      // If the user is not authenticated, initiate the sign-in process
      void signIn();
    },
  });

  // Fetch additional user data (secretMessage) using the getSecretMessage query from the API
  const { data: secretMessage } = api.post.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: !!sessionData?.user }, // Only fetch if sessionData.user exists
  );

  // Handle authenticated state with user-specific data
  if (status === "authenticated" && sessionData.user) {
    return (
      <IndexLayout>
        <ProfileBanner
          // Display the user's name and avatar depending on what on the session data (backend)
          name={sessionData.user.name ?? "Unknown User"}
          avatar={sessionData.user.image ?? "/default-avatar.png"}
        />
        <div className="flex items-center gap-8">
          <p className="my-10 text-sunray">
            {secretMessage ?? "Fetching your secret message..."}
          </p>
        </div>
      </IndexLayout>
    );
  }

  // Handle loading state while authentication status is being determined
  return (
    <IndexLayout>
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading your profile...</p>
      </div>
    </IndexLayout>
  );
};

export default UserProfile;

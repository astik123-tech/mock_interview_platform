// components/LogoutButton.tsx
"use client";

import { signOut } from "@/lib/actions/auth.action";

const LogoutButton = () => {
  const logout = async () => {
    await signOut();
    window.location.href = "/sign-in"; // Redirect after logout
  };

  return (
    <button type="button" className="cursor-pointer" onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;

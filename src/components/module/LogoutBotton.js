"use client";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
function LogoutButton() {
  return (
    <button
      className="flex text-xl border-none cursor-pointer max-sm:mb-5 "
      onClick={signOut}
    >
      <FiLogOut className="text-red-500" />
      خروج
    </button>
  );
}

export default LogoutButton;

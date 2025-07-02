"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Settings, Home, LogOut } from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    router.push("/auth");
  };

  return (
    <div className="flex flex-col h-full bg-gray-800 text-white w-64 space-y-6 py-7 px-2">
      <Link href="/dashboard" className="text-white text-2xl font-semibold uppercase hover:text-gray-300">
        Dashboard
      </Link>
      <nav>
        <Link
          href="/dashboard"
          className={`flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${pathname === "/dashboard" ? "bg-gray-700" : ""}`}
        >
          <Home className="mr-2" />
          Home
        </Link>
        <Link
          href="/dashboard/settings"
          className={`flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 ${pathname === "/dashboard/settings" ? "bg-gray-700" : ""}`}
        >
          <Settings className="mr-2" />
          Settings
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 w-full text-left"
        >
          <LogOut className="mr-2" />
          Logout
        </button>
      </nav>
    </div>
  );
}

"use client";

import React, { ReactNode, useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabaseBrowser } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js"; 
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

interface HeaderProps {
  title: string;
  logoSrc?: string;
  navLinks?: { name: string; href: string }[];
  actions?: ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  logoSrc,
  navLinks,
  actions,
}) => {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const [email, setEmail] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [clicked, setClicked] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const supabase = supabaseBrowser();

    supabase.auth.getSession().then(({ data }) => {
      setUser(data?.session?.user ?? null);
      setEmail(data?.session?.user?.email ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setEmail(session?.user?.email ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleLogout() {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    setUser(null);
    setDropdownOpen(false);
    router.push("/login");
  }


  return (
    <header className="w-full px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6 shadow-md flex items-center justify-between bg-base-100">
      {/* Logo + Title */}
      <Link href="/">
        <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
          {logoSrc && (
            <Image
              src={logoSrc}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full md:w-12 md:h-12 lg:w-14 lg:h-14"
            />
          )}
          <div className="text-xl md:text-2xl lg:text-2xl font-bold">
            {title}
          </div>
        </div>
      </Link>

      {/* Navigation Links */}
      {navLinks && navLinks.length > 0 && (
        <ul className="menu menu-horizontal p-0 gap-2 sm:flex hidden md:gap-3 lg:gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="btn btn-ghost md:text-base lg:text-lg"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* User / Actions */}
      <div className="flex items-center gap-2" ref={dropdownRef}>
        {actions ? (
          actions
        ) : user === undefined ? (
          <span className="loading loading-spinner loading-md"></span>
        ) : !user ? (
          <Link
          href="/login"
          className={`btn btn-primary text-white rounded md:text-base lg:text-lg md:px-4 md:py-2 lg:px-5 lg:py-3 ${
            clicked ? "btn-disabled cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => setClicked(true)}
        >
          {clicked ? (
            <span className="loading loading-spinner loading-xs btn-circle"></span>
          ) : (
            "Sign In / Sign Up"
          )}
        </Link>
        ) : (
          <div className="flex gap-2 md:gap-3 items-center">
      {/* Dashboard Button */}
      {pathname !== "/dashboard" && (
        <Link
          href="/dashboard"
          className="btn btn-primary text-white rounded md:text-base lg:text-lg md:px-4 md:py-2 lg:px-5 lg:py-3"
        >
          Dashboard
        </Link>
      )}

      {pathname === "/dashboard" && (
        <Link
          href="/feed"
          className="btn btn-primary text-white rounded md:text-base lg:text-lg md:px-4 md:py-2 lg:px-5 lg:py-3"
        >
          Feed
        </Link>
      )}

            <div className={`dropdown dropdown-end ${dropdownOpen ? "dropdown-open" : ""}`}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="btn btn-ghost btn-circle md:w-10 md:h-10 lg:w-12 lg:h-12"
              >
                {user.user_metadata?.avatar_url ? (
                  <Image
                    src={user.user_metadata.avatar_url || "/Default.jpg"}
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="rounded-full md:w-9 md:h-9 lg:w-10 lg:h-10"
                  />
                ) : (
                  <span className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-gray-300 rounded-full flex items-center justify-center text-sm md:text-base lg:text-base font-bold">
                    {user.email?.charAt(0).toUpperCase()}
                  </span>
                )}
              </button>

              <ul className="dropdown-content menu p-2 shadow bg-base-200 rounded-box text-sm md:text-base lg:text-base">
                <li>
                  <p className="px-4 py-2">{email || "Loading..."}</p>
                </li>
                <li>
                  <Link href="/profile" className="px-4 py-2">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link href="/setting" className="px-4 py-2">
                    Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="px-4 py-2 text-left w-full"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

'use client';

import React, { ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface HeaderProps {
  title: string;
  logoSrc?: string;
  navLinks?: { name: string; href: string }[];
  isLoggedIn?: boolean; 
  userAvatar?: string; // user profile
  actions?: ReactNode; // if provided, will be rendered instead of login/profile
}

export const Header: React.FC<HeaderProps> = ({
  title,
  logoSrc,
  navLinks,
  isLoggedIn = false,
  userAvatar,
  actions,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full px-6 py-4 shadow-md flex items-center justify-between bg-base-100 relative">
      
      {/* Left: Logo + Title */}
      <Link href="/">
      <div className="flex items-center gap-2">
        {logoSrc && (
          <Image
            src={logoSrc}
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        )}
        <div className="text-xl font-bold">{title}</div>
      </div>
      </Link>

      {/* Center: Navigation Links */}
      {navLinks && navLinks.length > 0 && (
        <ul className="menu menu-horizontal p-0 gap-2 sm:flex hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="btn btn-ghost">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Right: Actions or Login/Profile */}
      <div className="flex items-center gap-2">
        {actions ? (
          actions
        ) : !isLoggedIn ? (
          <>
            <Link href="/login" className="btn btn-primary text-white">Sign In</Link>
            <Link href="/signup" className="btn btn-outline">Sign Up</Link>
          </>
        ) : (
          <div className="relative">
            {/* Avatar */}
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="btn btn-ghost btn-circle"
            >
              {userAvatar ? (
                <Image
                  src={userAvatar}
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              ) : (
                <span className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-sm font-bold">
                  U
                </span>
              )}
            </button>

            {/* Dropdown */}
            {dropdownOpen && (
              <ul className="absolute right-0 mt-2 w-40 bg-base-200 shadow-lg rounded-md overflow-hidden z-50">
                <li>
                  <Link href="/profile" className="block px-4 py-2 hover:bg-base-300">
                    Profile
                  </Link>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-base-300">
                    Logout
                  </button>
                </li>
              </ul>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

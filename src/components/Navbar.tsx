"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

interface Props {}

const Navbar = ({}: Props) => {
  const { data: user, status } = useSession();
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={"/posts"}>All Posts</Link>
            </li>
            {user?.user?.email && (
              <li>
                <Link href={"/my-post"}>My Posts</Link>
              </li>
            )}
            <li>
              <Link href={""}>Pricing</Link>
            </li>
            <li>
              <Link href={""}>Blog</Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="btn btn-ghost text-xl">
          <CheckCircle className="w-6 h-6 text-primary" />
          <span className="font-bold">TodoMaster</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/posts"}>All Posts</Link>
          </li>
          {user?.user?.email && (
            <li>
              <Link href={"/my-post"}>My Posts</Link>
            </li>
          )}
          <li>
            <Link href={""}>Pricing</Link>
          </li>
          <li>
            <Link href={""}>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {status === "loading" && <p className="btn">Loading...</p>}
        {status === "authenticated" && user.user && (
          <p className="btn">{user.user?.email}</p>
        )}
        {status === "authenticated" && user.user && (
          <button onClick={() => signOut()} className="btn">
            Sign Out
          </button>
        )}
        {status === "unauthenticated" && (
          <>
            <Link className="btn" href={"/login"}>
              Login
            </Link>
            <Link className="btn" href={"/register"}>
              Sign In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

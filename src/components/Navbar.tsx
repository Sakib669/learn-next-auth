"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

interface Props {}

const Navbar = ({}: Props) => {
  const { data: user, status } = useSession();
  console.log(status);
  return (
    <div className="navbar bg-base-100 shadow-sm">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-end space-x-1 lg:space-x-5 ">
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

"use client";
import { CheckCircle, Mail, Lock, User, Phone } from "lucide-react";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      alert("Password didn't match");
      return;
    }

    const userData = {
      name,
      password,
      mobile,
      address,
      role: "user",
    };

    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await result.json();

    if (data.ok) {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: true,
        callbackUrl: "/",
      });
      if (res) {
        setLoading(false);
        alert("User registered successfully");
      }
    }

    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 flex items-center justify-center p-4 pt-20">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
          <span className="font-bold text-2xl">TodoMaster</span>
        </div>

        {/* Register Card */}
        <div className="bg-base-100 rounded-lg shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-2">
            Create Account
          </h2>
          <p className="text-center text-base-content/70 mb-8">
            Join TodoMaster today
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </div>

            {/* Mobile Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Mobile Number</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </div>

            {/* Address Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Address</span>
              </label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="textarea textarea-bordered w-full pl-10 min-h-20"
                required
              />
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full pl-10"
                  required
                  minLength={6}
                />
              </div>
            </div>

            {/* Confirm Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Confirm Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-base-content/40" />
                </div>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input input-bordered w-full pl-10"
                  required
                  minLength={6}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full mt-6"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Creating Account...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          {/* Login Link */}
          <div className="divider my-6">OR</div>

          <p className="text-center text-base-content/70">
            Already have an account?{" "}
            <Link href="/login" className="link link-primary font-medium">
              Login
            </Link>
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

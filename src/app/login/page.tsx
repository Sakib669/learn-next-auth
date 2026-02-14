"use client";
import { CheckCircle, Lock, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/",
    });

    if (res?.error) {
      alert("Invalid credentials");
    } else {
      console.log("Logged in successfully!");
      alert("Logged in successfully!");
      setLoading(false);
    }

    console.log({ email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
          <span className="font-bold text-2xl">TodoMaster</span>
        </div>

        {/* Login Card */}
        <div className="bg-base-100 rounded-lg shadow-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-2">Welcome Back</h2>
          <p className="text-center text-base-content/70 mb-8">
            Login to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                />
              </div>
            </div>


            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full mt-2"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner loading-sm"></span>
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="divider my-6">OR</div>

          {/* Register Link - তোমার দেওয়া অংশ */}
          <p className="text-center text-base-content/70">
            Don't have an account?{" "}
            <Link href="/register" className="link link-primary font-medium">
              Sign Up Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

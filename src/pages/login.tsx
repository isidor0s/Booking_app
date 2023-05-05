import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <>
      <div className="flex  justify-center items-center h-screen h-screen w-screen">
        <div className=" flex flex-col p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-[28px] font-semibold">Login to your account</h1>
          <form className="space-y-4 md:space-y-6 w-80">
            <div>
              <label className="block mb-2 text-base font-medium text-[#5A5A5D]">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setUsername(e.target.value)}
                className="text-black text-sm border border-slate-400 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                placeholder="example@gmail.com"
                required
              ></input>
            </div>
            <div>
              <label className="block mb-2 text-base font-medium text-[#5A5A5D]">
                Password
              </label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="text-black text-sm border border-slate-400 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  "
                placeholder="Enter your password"
                required
              ></input>
            </div>
            <button className=" text-white bg-[#1E293B] rounded-lg focus:ring-[#1E293B] focus:border-[#1E293B] block w-full p-2.5  ">
              Login
            </button>
            <div className="flex justify-center">
              <p className="text-black text-sm font-light text-gray-500">
                Don’t have an account?{" "}
                <Link
                  href="/signup"
                  className="font-medium text-[#1E293B] hover:underline "
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

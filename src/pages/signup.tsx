import { useState } from "react";
import Link from "next/link";
import { _supabaseClient } from "@/utils/supabase";

export default function Signup() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {data,error} = await _supabaseClient.auth.signUp({ 
        email: email,
        password: password,
    });
     console.log(data,error);
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen h-screen w-screen">
        <div className=" flex flex-col p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-[28px] font-semibold">Create your account</h1>
          <form className="space-y-4 md:space-y-6 w-80" onSubmit={onSubmit  }>
            <div>
              <label className="block mb-2 text-base font-medium text-[#5A5A5D]">
                Email
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
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
                Already have an accoount?{" "}
                <Link
                  href="/login"
                  className="font-medium text-[#1E293B] hover:underline "
                >
                  Login
                </Link>
              </p>
              
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

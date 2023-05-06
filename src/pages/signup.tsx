import { useState } from 'react';
import Link from 'next/link';
import { _supabaseClient } from '@/utils/supabase';

export default function Signup() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await _supabaseClient.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    type: 'employee', // admin or employee
                },
            },
        });
    };

    return (
        <>
            <div className="flex h-screen w-screen items-center justify-center">
                <div className=" flex flex-col space-y-4 p-6 sm:p-8 md:space-y-6">
                    <h1 className="text-[28px] font-semibold">Create your account</h1>
                    <form className="w-80 space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="mb-2 block text-base font-medium text-[#5A5A5D]">Email</label>
                            <input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-slate-400 p-2.5 text-sm text-black"
                                placeholder="example@gmail.com"
                                required
                            ></input>
                        </div>
                        <div>
                            <label className="mb-2 block text-base font-medium text-[#5A5A5D]">Password</label>
                            <input
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="focus:ring-primary-600 focus:border-primary-600 block w-full rounded-lg border border-slate-400 p-2.5 text-sm text-black"
                                placeholder="Enter your password"
                                required
                            ></input>
                        </div>
                        <button className=" block w-full rounded-lg bg-[#1E293B] p-2.5 text-white focus:border-[#1E293B] focus:ring-[#1E293B]">
                            Sign up
                        </button>
                        <div className="flex justify-center">
                            <p className="text-sm font-light text-gray-500">
                                Already have an account?{' '}
                                <Link href="/login" className="font-medium text-[#1E293B] hover:underline ">
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

import { Dispatch, FC, SetStateAction, useState } from 'react';
import Link from 'next/link';
import { _supabaseClient } from '@/utils/supabase';
import { useRouter } from 'next/router';

type UserRole = 'admin' | 'employee';

export default function Signup() {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [role, setRole] = useState<UserRole>('employee');
    const { reload } = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const { data } = await _supabaseClient.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    type: role,
                },
            },
        });
        if (data) reload();
    };

    return (
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
                    <RadioGroup role={role} setRole={setRole} />
                    <button className=" block w-full rounded-lg bg-[#1E293B] p-2.5 text-white focus:border-[#1E293B] focus:ring-[#1E293B]">
                        Sign up
                    </button>
                    <div className="flex justify-center">
                        <p className="text-sm font-light text-gray-500">
                            Already have an account?{' '}
                            <Link href="/" className="font-medium text-[#1E293B] hover:underline ">
                                Login
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

const RadioGroup: FC<{ role: UserRole; setRole: Dispatch<SetStateAction<UserRole>> }> = ({ role, setRole }) => {
    return (
        <div>
            <div className="mb-2 block text-base font-medium text-[#5A5A5D]">Select role</div>
            <ul className="mt-3 space-y-3">
                <li>
                    <label key={'employee'} className="flex items-center gap-x-2.5">
                        <input
                            type="radio"
                            value={'employee'}
                            checked={role === 'employee'}
                            onChange={() => setRole('employee')}
                            className="accent-[#1E293B]"
                        />
                        Employee
                    </label>
                </li>
                <li>
                    <label key={'admin'} className="flex items-center gap-x-2.5">
                        <input
                            type="radio"
                            value={'admin'}
                            checked={role === 'admin'}
                            onChange={() => setRole('admin')}
                            className="accent-[#1E293B]"
                        />
                        Admin
                    </label>
                </li>
            </ul>
        </div>
    );
};

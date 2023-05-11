import React, { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { _supabaseClient } from '@/utils/supabase';
import cn from 'classnames';

const NavLink: FC<{ name: string; href: string; isActive?: boolean }> = ({ name, href, isActive = false }) => {
    return (
        <li>
            <Link
                href={href}
                className={cn('flex items-center rounded-lg p-2 py-2.5 pl-4 transition-colors hover:bg-slate-400', {
                    'bg-slate-800 text-white': isActive,
                    'text-slate-800': !isActive,
                })}
            >
                <div className="font-medium">{name}</div>
            </Link>
        </li>
    );
};

export default function Sidebar() {
    const { reload, pathname } = useRouter();
    const activePage = pathname.split('/')[2];

    return (
        <aside className="sticky inset-0 z-40 h-screen w-64 bg-[#CBD5E1]">
            <div className="flex h-full flex-col justify-between px-12 py-16">
                <ul className="space-y-4 font-medium">
                    <NavLink name={'Dashboard'} href={'/admin'} isActive={activePage === undefined} />
                    <NavLink name={'Requests'} href={'/admin/requests'} isActive={activePage === 'requests'} />
                    <NavLink name={'Create room'} href={'/admin/create-room'} isActive={activePage === 'create-room'} />
                </ul>

                <button
                    className="rounded-lg border bg-[#EF4444] px-12 py-2.5 text-white transition-colors hover:border-red-500 hover:bg-red-100 hover:text-red-500"
                    onClick={async () => {
                        await _supabaseClient.auth.signOut();
                        reload();
                    }}
                >
                    Logout
                </button>
            </div>
        </aside>
    );
}

import Layout from '@/layouts/layout';
import { NextPage } from 'next';
import cn from 'classnames';
import type { FC } from 'react';

type BookingStatus = 'Approved' | 'Pending' | 'Rejected' | 'Ended';

const StatusBadge: FC<{ status: BookingStatus }> = ({ status }) => {
    return (
        <div className="flex flex-auto items-center justify-end gap-4">
            <div
                className={cn('rounded-xl border px-2 py-0.5 text-xs text-white', {
                    'bg-green-500': status === 'Approved',
                    'bg-yellow-500': status === 'Pending',
                    'bg-red-500': status === 'Rejected',
                    'bg-slate-500': status === 'Ended',
                })}
            >
                {status}
            </div>
        </div>
    );
};

const RequestsPage: NextPage = () => {
    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>My Bookings</div>
            <div className="flex flex-col gap-6">
                <div className="flex h-[52px] w-[640px] gap-[16px] rounded-lg border border-slate-400 px-4 py-3">
                    <div className="flex items-center gap-4">
                        <div className={'text-[20px] font-semibold text-slate-800'}>Team meeting</div>
                        <div className="text-xs font-medium text-[#292524]">Fri 9, June 2023</div>
                    </div>
                    <StatusBadge status={'Approved'} />
                </div>
                <div className="flex h-[52px] w-[640px] gap-[16px] rounded-lg border border-slate-400 px-4 py-3">
                    <div className="flex items-center gap-4">
                        <div className={'text-[20px] font-semibold text-slate-800'}>Team meeting</div>
                        <div className="text-xs font-medium text-[#292524]">Fri 9, June 2023</div>
                    </div>
                    <StatusBadge status={'Pending'} />
                </div>
                <div className="flex h-[52px] w-[640px] gap-[16px] rounded-lg border border-slate-400 px-4 py-3">
                    <div className="flex items-center gap-4">
                        <div className={'text-[20px] font-semibold text-slate-800'}>Team meeting</div>
                        <div className="text-xs font-medium text-[#292524]">Fri 9, June 2023</div>
                    </div>
                    <StatusBadge status={'Rejected'} />
                </div>
                <div className="flex h-[52px] w-[640px] gap-[16px] rounded-lg border border-slate-400 px-4 py-3">
                    <div className="flex items-center gap-4">
                        <div className={'text-[20px] font-semibold text-slate-800'}>Team meeting</div>
                        <div className="text-xs font-medium text-[#292524]">Fri 9, June 2023</div>
                    </div>
                    <StatusBadge status={'Ended'} />
                </div>
            </div>
        </Layout>
    );
};

export default RequestsPage;

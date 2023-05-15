import Layout from '@/layouts/layout';
import { NextPage } from 'next';
import cn from 'classnames';
import type { FC } from 'react';
import { Booking, BookingStatus } from '@/types/booking';
import { _supabaseClient } from '@/utils/supabase';
import { useQuery } from 'react-query';
import { useUser } from '@supabase/auth-helpers-react';
import dayjs from 'dayjs';

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

const BookingCard: FC<{ booking: Booking }> = ({ booking }) => {
    return (
        <div className="flex h-[52px] w-[640px] gap-[16px] rounded-lg border border-slate-400 px-4 py-3">
            <div className="flex items-center gap-4">
                <div className={'text-[20px] font-semibold text-slate-800'}>{booking.room_name}</div>
                <div className="text-xs font-medium text-slate-600">
                    {dayjs(booking.date).format('ddd, DD MMM YYYY')}
                </div>
            </div>
            <StatusBadge status={booking.status} />
        </div>
    );
};

const fetchBookings = async (employee_id: string) => {
    return await _supabaseClient.from('booking').select().eq('employee_id', employee_id).returns<Booking[]>();
};

const RequestsPage: NextPage = () => {
    const user = useUser();
    const { data: bookings } = useQuery('bookings', () => fetchBookings(user?.id || ''));

    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>My Bookings</div>
            <div className="flex flex-col gap-6">
                {bookings?.data?.map((booking) => (
                    <BookingCard key={booking.id} booking={booking} />
                ))}
            </div>
        </Layout>
    );
};

export default RequestsPage;

import Layout from '@/layouts/layout';
import { NextPage } from 'next';
import { FC, useMemo } from 'react';
import { Booking } from '@/types/booking';
import { useUser } from '@supabase/auth-helpers-react';
import { IncrementSlot, QueryRequests, changeRequest } from '@/utils/queries';
import { useQuery, useQueryClient } from 'react-query';
import dayjs from 'dayjs';

const Request: FC<{ request: Booking }> = ({ request }) => {
    const qc = useQueryClient();

    return (
        <div className="flex h-[71px] w-[640px] gap-[16px] rounded-lg border border-slate-400 px-4 py-3">
            <div className="flex  flex-col justify-between">
                <div className="flex flex-col">
                    <div className={'text-[20px] font-semibold text-slate-800'}>{request.room_name}</div>
                    <div className="text-xs font-semibold text-slate-800">
                        {dayjs(request.date).format('ddd, DD MMM YYYY')}
                    </div>
                </div>
            </div>
            <div className="flex flex-auto items-center justify-end gap-4">
                <div>
                    <button
                        className="rounded-lg border bg-[#EF4444] p-3 text-xs text-white transition-colors hover:border-red-500 hover:bg-red-100 hover:text-red-500"
                        onClick={async () => {
                            await changeRequest(request.id, 'Rejected');

                            qc.invalidateQueries(['adminRequests']);
                        }}
                    >
                        Reject
                    </button>
                </div>
                <div>
                    <button
                        className="rounded-lg border bg-slate-800 p-3 text-xs text-white transition-colors hover:border-slate-500 hover:bg-slate-100 hover:text-slate-500"
                        onClick={async () => {
                            changeRequest(request.id, 'Approved');
                            const data = await IncrementSlot(request.room_id);

                            if (data?.data) {
                                qc.invalidateQueries(['adminRequests']);
                            }
                        }}
                    >
                        Approve
                    </button>
                </div>
            </div>
        </div>
    );
};
const RequestsPage: NextPage = () => {
    const user = useUser();
    const { data: bookings } = useQuery(['adminRequests', user?.id], () => QueryRequests(user?.id || ''), {
        enabled: !!user?.id,
        refetchInterval: 10000,
    });

    const pending_requests = useMemo(() => {
        //filter out the booked and approved
        return bookings?.data?.filter((booking) => booking.status === 'Pending') || [];
    }, [bookings]);

    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Requests</div>
            <div className="flex flex-col gap-4">
                {pending_requests.map((booking) => (
                    <Request key={booking.id} request={booking} />
                ))}
            </div>
        </Layout>
    );
};

export default RequestsPage;

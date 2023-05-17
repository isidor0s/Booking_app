import Layout from '@/layouts/layout';
import { NextPage } from 'next';
import { FC, useMemo } from 'react';
import { Booking } from '@/types/booking';
import { useUser } from '@supabase/auth-helpers-react';
import { QueryRequests, changeRequest } from '@/utils/queries';
import { useQuery } from 'react-query';
import dayjs from 'dayjs';

const Request:FC<{request:Booking}>=({request}) =>{
    

    return(
        <div className="flex h-[71px] w-[640px] gap-[16px] rounded-lg border border-slate-400 px-4 py-3">
                    <div className="flex  flex-col justify-between">
                        <div className="flex flex-col">
                            <div className={'text-[20px] font-semibold text-slate-800'}>{request.room_name}</div>
                            <div className="text-xs font-semibold text-slate-800">{ dayjs(request.date).format('ddd, DD MMM YYYY')}</div>
                        </div>
                    </div>
                    <div className=" text-medium flex items-center text-base font-medium text-slate-800">
                        {/* <div>
                            <span className="text-[#78716C]">from:</span>
                            &nbsp;{request.employee_id}
                        </div> */}
                    </div>
                    <div className="flex flex-auto items-center justify-end gap-4">
                        <div>
                            <button className="rounded-lg border bg-[#EF4444] p-3 text-xs text-white transition-colors hover:border-red-500 hover:bg-red-100 hover:text-red-500" onClick={()=>{ changeRequest(request.id,"Rejected")} }>
                                Reject
                            </button>
                        </div>
                        <div>
                            <button className="rounded-lg border bg-slate-800 p-3 text-xs text-white transition-colors hover:border-slate-500 hover:bg-slate-100 hover:text-slate-500" onClick={()=>{ changeRequest(request.id,"Approved")} }>
                                Approve
                            </button>
                        </div>
                    </div>
                </div>
    );
};
const RequestsPage: NextPage = () => {
    const user = useUser();
    const { data: bookings } = useQuery('bookings', () => QueryRequests(user?.id || ''), {
        enabled: !!user?.id,
    });

   
    const pending_requests = useMemo(() => {
        //filter out the booked and approved
        const pending =
            bookings?.data?.filter((booking)=>booking.status != "Approved" && booking.status != "Rejected") || [];
        return pending;
    }, [bookings]);
    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Requests</div>
            <div className="flex flex-col gap-4">
                {pending_requests.map((booking)=>(
                    <Request key={booking.admin_id} request={booking}/>
                ))}
                
                
            </div>
        </Layout>
    );
};

export default RequestsPage;

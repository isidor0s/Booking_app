import Layout from '@/layouts/layout';
import { NextPage } from 'next';

const RequestsPage: NextPage = () => {
    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Requests</div>
            <div className="flex flex-col gap-4">
                
                    <div className="flex h-[71px] w-[640px] gap-[16px] rounded-lg border border-slate-400 px-4 py-3">
                        <div className="flex  flex-col justify-between">
                            <div className="flex flex-col">
                                <div className={'text-[20px] font-semibold text-slate-800'}>Team meeting</div>
                                <div className="text-xs font-semibold text-slate-800">09/06/2023</div>
                            </div>
                        </div>
                        <div className=" text-medium flex items-center text-base font-medium text-slate-800">
                            <div>
                                <span className="text-[#78716C]">from:</span>
                                &nbsp;Isidoros Chatzichrysos
                            </div>
                        </div>
                        <div className='flex flex-auto items-center justify-end gap-4'>
                            <div><button className="rounded-lg border bg-[#EF4444] p-3 text-white transition-colors hover:border-red-500 hover:bg-red-100 hover:text-red-500 text-xs">Reject</button></div>
                            <div><button className="rounded-lg border bg-slate-800 p-3 text-white transition-colors hover:border-slate-500 hover:bg-slate-100 hover:text-slate-500 text-xs">Approve</button></div>
                        </div>
                    </div>
                    <div className="flex h-[71px] w-[640px] gap-[16px] rounded-lg border border-slate-400 px-4 py-3">
                        <div className="flex  flex-col justify-between">
                            <div className="flex flex-col">
                                <div className={'text-[20px] font-semibold text-slate-800'}>Team meeting</div>
                                <div className="text-xs font-semibold text-slate-800">09/06/2023</div>
                            </div>
                        </div>
                        <div className=" text-medium flex items-center text-base font-medium text-slate-800">
                            <div>
                                <span className="text-[#78716C]">from:</span>
                                &nbsp;Isidoros Chatzichrysos
                            </div>
                        </div>
                        <div className='flex flex-auto items-center justify-end gap-4'>
                            <div><button className="rounded-lg border bg-[#EF4444] p-3 text-white transition-colors hover:border-red-500 hover:bg-red-100 hover:text-red-500 text-xs">Reject</button></div>
                            <div><button className="rounded-lg border bg-slate-800 p-3 text-white transition-colors hover:border-slate-500 hover:bg-slate-100 hover:text-slate-500 text-xs">Approve</button></div>
                        </div>
                    </div>
                
            </div>
        </Layout>
    );
};

export default RequestsPage;

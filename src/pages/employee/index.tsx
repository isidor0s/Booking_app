import Layout from '@/layouts/layout';
import { NextPage } from 'next';

const Dashboard: NextPage = () => {
    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Dashboard</div>
            <div className="flex flex-col gap-6">
                <div className="flex h-[52px] w-[640px] gap-[16px] rounded-lg border border-slate-400 px-4 py-3">
                    <div className="flex items-center gap-4">
                        <div className={'text-[20px] font-semibold text-slate-800'}>Team meeting</div>
                        <div className="text-xs font-medium text-[#292524]">Fri 9, June 2023</div>
                    </div>
                    <div className="flex flex-auto items-center justify-end gap-4">
                        <div className="rounded-xl border bg-green-500 px-2 py-0.5 text-xs text-white transition-colors hover:border-slate-500 hover:bg-slate-100 hover:text-slate-500">
                            Approved
                        </div>
                    </div>
                </div>
                <div className="flex h-[52px] w-[640px] gap-[16px] rounded-lg border border-slate-400 px-4 py-3">
                    <div className="flex items-center gap-4">
                        <div className={'text-[20px] font-semibold text-slate-800'}>Team meeting</div>
                        <div className="text-xs font-medium text-[#292524]">Fri 9, June 2023</div>
                    </div>
                    <div className="flex flex-auto items-center justify-end gap-4">
                        <div className="rounded-xl border bg-red-500 px-2 py-0.5 text-xs text-white transition-colors hover:border-slate-500 hover:bg-slate-100 hover:text-slate-500">
                            Approved
                        </div>
                    </div>
                </div>
                <div className="flex h-[52px] w-[640px] gap-[16px] rounded-lg border border-slate-400 px-4 py-3">
                    <div className="flex items-center gap-4">
                        <div className={'text-[20px] font-semibold text-slate-800'}>Team meeting</div>
                        <div className="text-xs font-medium text-[#292524]">Fri 9, June 2023</div>
                    </div>
                    <div className="flex flex-auto items-center justify-end gap-4">
                        <div className="rounded-xl border bg-yellow-500 px-2 py-0.5 text-xs text-white transition-colors hover:border-slate-500 hover:bg-slate-100 hover:text-slate-500">
                            Approved
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;

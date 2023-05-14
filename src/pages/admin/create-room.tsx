import Layout from '@/layouts/layout';
import { NextPage } from 'next';

const CreateRoom: NextPage = () => {
    return (
        <Layout>
            <div className={'text-3xl font-semibold text-slate-800'}>Create room</div>
            <div>
                <form className="flex flex-col gap-6">
                    <div>
                        <label className="mb-2 block text-xl font-medium text-slate-800">Name</label>
                        <input
                            // onChange={(e) => setEmail(e.target.value)}
                            className="focus:ring-primary-600 focus:border-primary-600 block w-48 rounded-lg border border-slate-400 p-2.5 text-base text-black  "
                            placeholder="e.g. Auditorium"
                            required
                        ></input>
                    </div>
                    <div>
                        <label className="mb-2 block text-xl font-medium text-slate-800">Date</label>
                        <input
                            type="Date"
                            // onChange={(e) => setEmail(e.target.value)}
                            className="focus:ring-primary-600 focus:border-primary-600 block w-48 rounded-lg border border-slate-400 p-2.5 text-base text-black  "
                            placeholder="mm/dd/yyyy"
                            required
                        ></input>
                    </div>
                    <div>
                        <div className="flex gap-6">
                            <div>
                                <label className="mb-2 block text-xl font-medium text-slate-800">Date</label>
                                <input
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="focus:ring-primary-600 focus:border-primary-600 block w-48 rounded-lg border border-slate-400 p-2.5 text-base text-black  "
                                    placeholder="e.g. Course"
                                    required
                                ></input>
                            </div>
                            <div>
                                <label className="mb-2 block text-xl font-medium text-slate-800">Capacity</label>
                                <input
                                    // onChange={(e) => setEmail(e.target.value)}
                                    className="focus:ring-primary-600 focus:border-primary-600 block w-24 rounded-lg border border-slate-400 p-2.5 text-base text-black  "
                                    placeholder="e.g. 12"
                                    required
                                ></input>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div><button className="rounded-lg border bg-slate-800 px-4 py-3 text-white transition-colors hover:border-slate-500 hover:bg-slate-100 hover:text-slate-500 text-base">Create</button></div>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default CreateRoom;

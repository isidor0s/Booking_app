import { _supabaseClient } from '@/utils/supabase';
import { useSession } from '@supabase/auth-helpers-react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const EmployeePage: NextPage = () => {
    const session = useSession();
    const { reload } = useRouter();

    return (
        <>
            <h1>Signed in as employee</h1>
            {session && <p>{session?.user.id}</p>}

            <button
                onClick={async () => {
                    await _supabaseClient.auth.signOut();
                    reload();
                }}
            >
                Logout
            </button>
        </>
    );
};

export default EmployeePage;

import Sidebar from '@/components/side-bar';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={'relative flex h-full w-full flex-row'}>
            <Sidebar />
            <div
                className={'flex h-full w-full flex-col'}
                style={{
                    padding: '4rem',
                    gap: '2rem',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Layout;

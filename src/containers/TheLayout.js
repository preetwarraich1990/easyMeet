import React from 'react';

import { TheContent } from './index';
import { TheDashboardHeader } from './TheDashboardHeader';

const TheLayout = () => {
    return (
        <>
            <TheDashboardHeader />
            <main>
                <TheContent />
            </main>
        </>
    );
};

export default TheLayout;

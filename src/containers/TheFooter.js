import React from 'react';

const TheFooter = () => {
    return (
        <div fixed={false}>
            <div className='ml-auto'>
                <span className='mr-1'>I am footer</span>
            </div>
        </div>
    );
};

export default React.memo(TheFooter);

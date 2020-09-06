import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react';

export const CustomLoader = () => {
    return (
        <div>
            <Dimmer active inverted>
                <Loader size='medium'>Loading</Loader>
            </Dimmer>

        </div>
    );
};

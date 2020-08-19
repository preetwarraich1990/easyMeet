import React from 'react';
import '../../../scss/components/_switch.scss';

export default function SwitchButton({ checked, ...props }) {
    return (
        <label className='switch'>
            <input type='checkbox' defaultChecked={checked} {...props} />
            <span className='slider round'></span>
        </label>
    );
}

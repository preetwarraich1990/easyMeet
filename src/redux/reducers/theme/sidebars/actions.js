import { sidebar } from './types';

/**
 *
 * @param isOpen
 * @returns {{payload: *, type: string}}
 */
export const setLeftSidebar = isOpen => {
    return {
        type: sidebar.LEFT_SIDEBAR,
        payload: isOpen
    };
};

/**
 *
 * @param isOpen
 * @returns {{payload: *, type: string}}
 */
export const setRightSidebar = isOpen => {
    return {
        type: sidebar.RIGHT_SIDEBAR,
        payload: isOpen
    };
};

export const toggleAutoHide = () => {
    return {
        type: sidebar.TOGGLE_AUTO_HIDE
    };
};

import { colors } from './types';

/**
 *
 * @param backgroundColor
 * @returns {{payload: *, type: string}}
 */
export const setMainColor = backgroundColor => {
    return {
        type: colors.MAIN,
        payload: backgroundColor
    }
}

/**
 *
 * @param textColor
 * @returns {{payload: *, type: string}}
 */
export const setTextColor = textColor => {
    return {
        type: colors.TEXT,
        payload: textColor
    }
}

/**
 *
 * @param color
 * @returns {{payload: *, type: string}}
 */
export const setHoverColor = color => {
    return {
        type: colors.HOVER,
        payload: color
    }
}
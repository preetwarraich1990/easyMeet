import { apiPaths } from '../../utils/apiPaths';
import { gpAxios } from '../../utils/gpAxios';

/**
 *
 * @param {*} data
 */
export const checkSlugAvailability = slug => dispatch => {
    return gpAxios.get(apiPaths.meeter_slug + slug);
};

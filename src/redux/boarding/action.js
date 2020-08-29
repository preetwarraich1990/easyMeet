import { apiPaths } from '../../utils/apiPaths';
import { gpAxios } from '../../utils/gpAxios';

/**
 *
 * @param {*} data
 */
export const checkSlugAvailability = slug => dispatch => {
    return gpAxios.get(apiPaths.meeter_slug + slug);
};

export const updateSlug = slug => dispatch => {
    return gpAxios.put(apiPaths.meeter_slug_update, slug);
};

export const updateUserBio = bio => dispatch => {
    return gpAxios.put(apiPaths.user_management.update_bio, bio);
};


export const updateProfilePicture = file => dispatch => {
    return gpAxios.post(apiPaths.user_management.update_profile_pic, file);
};


export const updateAvailability = data => dispatch => {
    return gpAxios.put(apiPaths.user_management.change_availability, data);
};


export const checkAvailability = meeter_id => dispatch => {
    return gpAxios.get(apiPaths.user_management.check_meeter_availibility + meeter_id);
};
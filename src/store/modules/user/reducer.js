const INITIAL_STATE = {
    profile: null
};

export default function user(state = INITIAL_STATE, action) {
    switch (action.type) {
        case '@auth/SIGNIN_SUCCESS':
            return { profile: action.payload.user };
        case '@user/UPDATE_PROFILE_SUCCESS':
            return { profile: action.payload.user };
        default:
            return state;
    }
}

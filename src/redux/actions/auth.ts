import {
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    ACCESSTOKEN,
    REFRESHTOKEN,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAILURE,
    STATUS_OK,
    STATUS_CREATED,
    STATUS_NO_CONTENT,
    TOGGLE_MESSAGE_POPUP
} from '../constants/auth';

import { instanceAxios } from '../../utils/axios';
import { useLocalStorage } from '../../hooks/useStorage';

export interface IUser {
    firstName: string
    lastName: string
    email: string
    password: string
    createAt?: string
    id?: string | number
    updatedAt?: string
    role?: string
}

export interface IUserLogin {
    email: string
    password: string
}

export const toggleMessagePopupCreater = (payload: boolean) => {
    return {
        type: TOGGLE_MESSAGE_POPUP,
        payload
    };
};

const loginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    };
};

const loginSuccess = (payload: IUser) => {
    return {
        type: LOGIN_SUCCESS,
        payload
    };
};

const loginFailure = (payload: any) => {
    return {
        type: LOGIN_FAILURE,
        payload
    };
};

const signupRequest = () => {
    return {
        type: SIGNUP_REQUEST,
    };
};

const signupSuccess = () => {
    return {
        type: SIGNUP_SUCCESS,
    };
};

const signupFailure = (payload: any) => {
    return {
        type: SIGNUP_FAILURE,
        payload
    };
};

const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST,
    };
};

const logoutSuccess = () => {
    return {
        type: LOGOUT_SUCCESS,
    };
};

const logoutFailure = (payload: any) => {
    return {
        type: LOGOUT_FAILURE,
        payload
    };
};

export const loginCreater = (payload: IUserLogin) => {
    return (dispatch: any) => {
        dispatch(loginRequest());
        const { setItem } = useLocalStorage();

        instanceAxios.post('/auth/signin', payload)
            .then(response => {
                const { data, status } = response;

                if (status === STATUS_OK) {
                    const { user, accessToken, refreshToken } = data;

                    const userData: IUser = user;

                    // ! Save token to LocalStorage
                    setItem(ACCESSTOKEN, JSON.stringify(accessToken))
                    setItem(REFRESHTOKEN, JSON.stringify(refreshToken))

                    dispatch(loginSuccess(userData));
                }
            })
            .catch(error => {
                dispatch(loginFailure(error.message));
            });
    };
};

export const signupCreater = (payload: IUser) => {
    return (dispatch: any) => {
        dispatch(signupRequest());

        instanceAxios.post('/auth/signup', payload)
            .then(response => {
                if (response.status === STATUS_CREATED) {
                    dispatch(signupSuccess());
                }
            })
            .catch(error => {
                dispatch(signupFailure(error.message));
            });
    };
};

export const logoutCreater = (refreshToken: string) => {
    return (dispatch: any) => {
        const { removeItem } = useLocalStorage();
        dispatch(logoutRequest());

        instanceAxios.post('/auth/signout', {
            refreshToken
        })
            .then(response => {
                if (response.status === STATUS_NO_CONTENT) {
                    dispatch(logoutSuccess());

                    removeItem(ACCESSTOKEN);
                    removeItem(REFRESHTOKEN);
                }
            })
            .catch(error => {
                dispatch(logoutFailure(error.message));
            });
    };
};
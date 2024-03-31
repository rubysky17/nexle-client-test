import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, TOGGLE_MESSAGE_POPUP } from "../constants/auth";
import { IUser } from "../actions/auth";

interface IState {
    user: IUser | any
    isLoadingLogin: boolean
    errorLogin: string | null
    isLoadingSignup: boolean
    errorSignup: string | null
    isLoadingLogout: boolean
    isShowMessage: boolean
}

const initialState: IState = {
    user: {},
    isLoadingLogin: false,
    errorLogin: null,
    isLoadingSignup: false,
    errorSignup: null,
    isLoadingLogout: false,
    isShowMessage: false
};

const AuthReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                user: {},
                isLoadingLogin: true,
                errorLogin: null,
            };
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                isLoadingLogin: false,
                errorLogin: null
            };
        }

        case LOGIN_FAILURE: {
            return {
                ...state,
                user: {},
                isLoadingLogin: false,
                errorLogin: action.payload,
            };
        }

        case SIGNUP_REQUEST: {
            return {
                ...state,
                isLoadingSignup: true
            }
        }

        case SIGNUP_SUCCESS: {
            return {
                ...state,
                isLoadingSignup: false,
                errorSignup: null,
                isShowMessage: true
            }
        }

        case SIGNUP_FAILURE: {
            return {
                ...state,
                isLoadingSignup: false,
                errorSignup: action.payload,
                isShowMessage: true
            }
        }

        case LOGOUT_REQUEST: {
            return {
                ...state,
                isLoadingLogout: true
            }
        }

        case LOGOUT_SUCCESS: {
            return {
                ...state,
                isLoadingLogout: false,
                user: {}
            }
        }

        case LOGOUT_FAILURE: {
            return {
                ...state,
                isLoadingLogout: false,
            }
        }

        case TOGGLE_MESSAGE_POPUP: {
            return {
                ...state,
                isShowMessage: action.payload,
            }
        }

        default:
            return state;
    }
};

export default AuthReducer;
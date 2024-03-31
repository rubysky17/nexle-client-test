import { useLocalStorage } from 'hooks/useStorage';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'Context/AuthContext';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom'

import HAvatar from 'Components/Avatar';

import { logoutCreater } from '../../redux/actions/auth';
import { ACCESSTOKEN, REFRESHTOKEN } from '../../redux/constants/auth';

function AdminTemplate() {
    const { user } = useSelector((state: any) => state.AuthReducer);
    const dispatch: any = useDispatch();
    const { getItem }: any = useLocalStorage();
    const { logout }: any = useAuth();

    const accessToken: string = JSON.parse(getItem(ACCESSTOKEN));

    // ! Handle changed login status to false sign for AuthProvider know user is logout success through accessToken
    useEffect(() => {
        if (!accessToken) {
            logout()
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken])

    const logoutHandler = () => {
        const refreshToken: string = JSON.parse(getItem(REFRESHTOKEN));
        dispatch(logoutCreater(refreshToken))
    };

    return (
        <div>
            <header
                style={{
                    background: "#fff"
                }}
                className='justify-content-end d-flex px-4 py-3'
            >
                <HAvatar
                    name={user.firstName || "JohnDoe"}
                    status="Available"
                    action={logoutHandler}
                />
            </header>

            <Outlet />
        </div>
    )
}

export default AdminTemplate
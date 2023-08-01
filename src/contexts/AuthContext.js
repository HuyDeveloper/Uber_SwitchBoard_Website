import { BASE_URL } from '~/config';
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const loginAdmin = (phone, password) => {
        axios
            .post(`/users/login-admin`, {
                phone: phone,
                password: password,
            })
            .then((response) => {
                setUserInfo(response.data.result);
                localStorage.setItem('userInfo', JSON.stringify(response.data.result));
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const logout = () => {
        fetch(`/users/logout`, {
            method: 'POST',
            Headers: {
                Authorization: `Bearer ${userInfo.access_token}`,
            },
            body: JSON.stringify({
                refresh_token: userInfo.refresh_token,
            }),
        })
            .then((res) => {
                console.log(res.data);
                localStorage.removeItem('userInfo');
                setUserInfo({});
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const isLoggedIn = async () => {
        try {
            let userInfor = await localStorage.getItem('userInfo');
            userInfor = JSON.parse(userInfor);

            if (userInfor) {
                setUserInfo(userInfor);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        isLoggedIn();
    }, []);

    return <AuthContext.Provider value={{ userInfo, loginAdmin, isLoggedIn, logout }}>{children}</AuthContext.Provider>;
};

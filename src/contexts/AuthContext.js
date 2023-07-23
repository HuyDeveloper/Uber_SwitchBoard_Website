import { BASE_URL } from '~/config';
import { createContext, useState } from 'react';
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
                console.log(response.data.message);
                console.log(phone, password);
                localStorage.setItem('userInfo', JSON.stringify(response.data.result));
                console.log(response.data.result);
            })
            .catch((error) => {
                console.error(error);
            });
    };
    return <AuthContext.Provider value={{ loginAdmin }}>{children}</AuthContext.Provider>;
};

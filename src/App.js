import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from '~/components/Layout/DefaultLayout';
import LoginLayout from '~/components/Layout/LoginLayout';
import { AuthContext } from '~/contexts/AuthContext';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Cars from '~/pages/BookingForm/BookingForm';

function App() {
    const { userInfo } = useContext(AuthContext);
    const [element, setElement] = useState(null);
    useEffect(() => {
        if (userInfo.access_token) {
            setElement(
                <LoginLayout>
                    <Home />
                </LoginLayout>,
            );
        } else {
            setElement(
                <DefaultLayout>
                    <Home />
                </DefaultLayout>,
            );
        }
    }, [userInfo.access_token]);

    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route key={1} path="/" element={element} />
                    <Route
                        key={2}
                        path="/login"
                        element={
                            <LoginLayout>
                                <Login />
                            </LoginLayout>
                        }
                    />
                    <Route
                        key={3}
                        path="/booking-cars"
                        element={ userInfo.access_token ?
                            
                            <LoginLayout>
                                <Cars />
                            </LoginLayout>
                            :
                            <Navigate replace to={"/login"} />
                        }
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

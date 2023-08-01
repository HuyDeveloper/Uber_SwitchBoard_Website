import { useEffect, useState, useContext } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCar, faHouseChimney, faMotorcycle, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import styles from '../components/Header/Header.module.scss';
import Menu from '~/components/Popper/Menu';
import { AuthContext } from '~/contexts/AuthContext';

const cx = classNames.bind(styles);

function Header({ children }) {
    const { userInfo, logout } = useContext(AuthContext);
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faHouseChimney} />,
            title: 'Home',
            to: '/',
        },
        {
            icon: <FontAwesomeIcon icon={faCar} />,
            title: 'Booking cars',
            to: '/booking-cars',
        },
        {
            icon: <FontAwesomeIcon icon={faMotorcycle} />,
            title: 'Booking bikes',
            to: '/booking-bikes',
        },
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Logout',
            onClick: () => {
                logout();
            },
        },
    ];
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <h2 className={cx('logo')}>Uber</h2>
                    <div className={cx('actions')}>
                        <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faBars} />
                            </button>
                        </Menu>
                    </div>
                </div>
            </header>
            <div className="content">{children}</div>
        </div>
    );
}

export default Header;

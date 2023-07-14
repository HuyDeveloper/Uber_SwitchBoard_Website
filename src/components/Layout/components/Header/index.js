import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faCar,
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faHouseChimney,
    faKeyboard,
    faMagnifyingGlass,
    faMotorcycle,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';

import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

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
];

function Header() {
    const handleMenuChange = (menuItem) => {
        console.log(menuItem);
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <h2 className={cx('logo')}>Uber</h2>

                <div className={cx('actions')}>
                    <Menu items={MENU_ITEMS} onChange={handleMenuChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                    </Menu>
                    <Button to="login" primary rounded>
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;

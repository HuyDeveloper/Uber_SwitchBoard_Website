import classNames from 'classnames/bind';
import styles from './checkbox.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faCarSide, faMotorcycle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function CheckBox({ onSelect }) {
    const [checkbox1, setCheckbox1] = useState(false);
    const [checkbox2, setCheckbox2] = useState(false);
    const [checkbox3, setCheckbox3] = useState(false);

    const handleCheckbox1Change = (event) => {
        if (event.target.checked) {
            setCheckbox1(true);
            setCheckbox3(false);
            setCheckbox2(false);
            onSelect('Car 4 seats');
        }
    };

    const handleCheckbox2Change = (event) => {
        if (event.target.checked) {
            setCheckbox1(false);
            setCheckbox3(false);
            setCheckbox2(true);
            onSelect('Car 7 seats');
        }
    };

    const handleCheckbox3Change = (event) => {
        if (event.target.checked) {
            setCheckbox1(false);
            setCheckbox2(false);
            setCheckbox3(true);
            onSelect('Motorbike');
        }
    };
    return (
        <div className={cx('checkbox-container')}>
            <label className={cx('checkbox-label')}>
                <FontAwesomeIcon className={cx('icon')} icon={faCar} />
                <input
                    type="checkbox"
                    checked={checkbox1}
                    onChange={handleCheckbox1Change}
                    className={cx('checkbox-input')}
                />
                <span className={cx('checkbox-custom')}></span>
                Car 4 seats
            </label>
            <label className={cx('checkbox-label')}>
                <input
                    type="checkbox"
                    checked={checkbox2}
                    onChange={handleCheckbox2Change}
                    className={cx('checkbox-input')}
                />
                <span className={cx('checkbox-custom')}></span>
                Car 7 seats
            </label>
            <label className={cx('checkbox-label')}>
                <FontAwesomeIcon className={cx('icon')} icon={faMotorcycle} />
                <input
                    type="checkbox"
                    checked={checkbox3}
                    onChange={handleCheckbox3Change}
                    className={cx('checkbox-input')}
                />
                <span className={cx('checkbox-custom')}></span>
                Motorbike
            </label>
        </div>
    );
}

export default CheckBox;

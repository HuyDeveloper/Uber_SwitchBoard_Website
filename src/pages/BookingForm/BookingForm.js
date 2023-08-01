import SearchBar from './SearchPlaceBar';
import CheckBox from './checkBox';
import Distance from './distance';
import classNames from 'classnames/bind';
import styles from './bookingform.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faLocationDot } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function BookingForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [type, setType] = useState('');
    const handleSelectPickUp = (result) => {
        setStart(result);
    };
    const handleSelectDestination = (result) => {
        setEnd(result);
    };
    const handleType = (result) => {
        console.log(result);
        setType(result);
    };

    const handleSubmit = () => {
        if (phone.length !== 10 || name.length === 0 || start.length === 0 || end.length === 0) {
            alert('Your information is not invalid!');
        }
    };
    return (
        <div className={cx('biggest')}>
            <div className={cx('wrapper')}>
                <form className={cx('inner')} onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <FontAwesomeIcon className={cx('locationIcon')} icon={faLocationDot} />
                        <label htmlFor="start">Pickup Location:</label>
                    </div>
                    <SearchBar onSelect={handleSelectPickUp} />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <FontAwesomeIcon style={{ color: 'green', fontWeight: 'bold' }} icon={faCheck} />
                        <label htmlFor="start">Destination:</label>
                    </div>
                    <SearchBar onSelect={handleSelectDestination} />
                    <label htmlFor="name">Customer Name:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter name" />
                    <label htmlFor="phone">Phone Number:</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id="phone"
                        placeholder="Enter phone number"
                    />
                    <CheckBox onSelect={handleType} />
                    <button className={cx('back-home')} type="button">
                        <FontAwesomeIcon icon={faArrowLeft} />
                        Back to home
                    </button>
                </form>
                <div className={cx('second-inner')}>
                    <button className={cx('submit')} type="submit">
                        Booking
                    </button>
                    <Distance origin={start} destination={end} />
                </div>
            </div>
        </div>
    );
}

export default BookingForm;

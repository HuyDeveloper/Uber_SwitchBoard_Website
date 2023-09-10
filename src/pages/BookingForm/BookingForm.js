import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import SearchBar from './SearchPlaceBar';
import CheckBox from './checkBox';
import Distance from './distance';
import Clock from './Clock';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCheck, faLocationDot ,faClock} from '@fortawesome/free-solid-svg-icons';
import styles from './bookingform.module.scss';

const cx = classNames.bind(styles);

function BookingForm() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [pickupLocation, setPickupLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [typeVehicle, setTypeVehicle] = useState('');
    const [bookingSuccess, setBookingSuccess] = useState(false);
    //Time

    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
  

    const { userInfo } = useContext(AuthContext);



    const handleSelectPickUp = (result) => {
        setPickupLocation(result);
    };

    const handleSelectDestination = (result) => {
        setDestination(result);
    };

    const handleType = (result) => {
        setTypeVehicle(result);
    };


    useEffect(() => {
        const storedBookingSuccess = localStorage.getItem('bookingSuccess');
        if (storedBookingSuccess) {
            setBookingSuccess(JSON.parse(storedBookingSuccess));
            setTimeout(() => {
                setBookingSuccess(false);
                localStorage.removeItem('bookingSuccess');
                console.log(3);
            }, 3000); // 3 seconds
        }
        console.log(1);
    }, []);
    const handleBookingTime = () => {
            
        }

    const handleSubmit = () => {
       
        if (
            phone.length !== 10 ||
            name.length === 0 ||
            pickupLocation.length === 0 ||
            destination.length === 0 ||
            typeVehicle.length === 0
        ) {
            alert('Your information is not valid!');
        } else {
            const data = {
                pickupLocation: pickupLocation,
                destination: destination,
                name: name,
                phone: phone,
                typeVerhicle: typeVehicle,
            };
            fetch(`/booking/booking-service`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${userInfo.access_token}`,
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log('response');
                    console.log(data.message);
                    setBookingSuccess(true);
                    localStorage.setItem('bookingSuccess', JSON.stringify(true));
                })
                .catch((error) => {
                    console.error(error);
                    alert('Error!');
                });
        }
        setName('');
        setPhone('');
        setPickupLocation('');
        setDestination('');
    };

    const handleBook=(e)=>{
        console.log("handleBook");
        const currentTimeFormatted = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        let [h,m,s]=currentTimeFormatted.split(':');
        let h1=parseInt(hour)||0
        let m1=parseInt(minute)||0
        let hStart=parseInt(h)
        let mStart=parseInt(m)
        let sStart=parseInt(s)
        let timeCal=(h1-hStart)*60*60+(m1-mStart)*60*1000-sStart*1000
        if(h1===0&&m1===0){
            timeCal=0
        }
        console.log("TimeAlarm"+h1+":"+m1+":"+s)
        console.log('TimeCal'+timeCal)
        console.log("hStart"+hStart)

        e.preventDefault();
        setTimeout(()=>handleSubmit(), timeCal);
    }
    return (
        <div className={cx('biggest')}>
            {bookingSuccess && <div className={cx('booking-success')}>Booking thành công!</div>}
            <form className={cx('wrapper')} onSubmit={handleBook}>
                <div className={cx('inner')}>
                    <div style={{ display: 'flex', flexDirection: 'row', paddingLeft:20,paddingBottom:5 }}>
                        <FontAwesomeIcon style={{}} className={cx('locationIcon')} icon={faLocationDot} />
                        <label style={{}}  htmlFor="start">Pickup Location:</label>
                    </div>
                    <SearchBar  onSelect={handleSelectPickUp} />
                    <div style={{ display: 'flex', flexDirection: 'row',paddingLeft:20,paddingBottom:5, paddingTop:10 }}>
                        <FontAwesomeIcon style={{ color: 'green', fontWeight: 'bold',paddingRight:5}} icon={faLocationDot} />
                        <label htmlFor="start">Destination:</label>
                    </div>
                    <SearchBar onSelect={handleSelectDestination} />
                    <label style={{paddingLeft:20,paddingBottom:5, paddingTop:10}} htmlFor="name">Customer Name:</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} id="name" placeholder="Enter name" />
                    <label style={{paddingLeft:20,paddingBottom:5, paddingTop:10}} htmlFor="phone">Phone Number:</label>
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        id="phone"
                        placeholder="Enter phone number"
                    />
                    <div> 
                        <div style={{ display: 'flex', flexDirection: 'row',paddingLeft:20,paddingBottom:5, paddingTop:10 }}>
                        <FontAwesomeIcon style={{  fontWeight: 'bold',paddingRight:5}} icon={faClock} />
                            <label  htmlFor="clock">Alarm Clock:</label>
                        </div>
     
                        <div className={cx('inputs')}>
                            <input type='number' id="hourInput" placeholder='Hour' min='0' max='23' onChange={(e)=>setHour(e.target.value)}
                            
                            />
                            <input type='number' id="minuteInput" placeholder='Min' min='0' max='59' onChange={(e)=>setMinute(e.target.value)}/>
                        </div>
                        <p>
                         
                        </p>
                        
                    </div>
                    {/* <div>
                        <h2>Alarm Clock</h2>
                        <p>Current Time: {currentTime}</p>
                        <input type="text" value={currentTime} onChange={handleCurrentTimeChange} />
                        <br />
                        <input type="text" value={alarmTime} onChange={(e)=>setAlarmTime(e.target.value)} />
                        <br />
                        <button onClick={checkAlarm}>Set Alarm</button>
                        {isRinging && <p>Alarm is ringing!</p>}
                    </div> */}
                    <CheckBox onSelect={handleType} />
                    <button className={cx('back-home')} type="button">
                        <FontAwesomeIcon icon={faArrowLeft} style={{marginLeft:10,marginRight:100}}/>
                   
                                Back to home

                    </button>
                </div>
                <div className={cx('second-inner')}>
                    <button className={cx('submit')} type="submit">
                        Booking
                    </button>
                    <Distance origin={pickupLocation} destination={destination} />
                </div>
            </form>
        </div>
    );
}

export default BookingForm;

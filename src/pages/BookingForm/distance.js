import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { REACT_APP_MAPBOX_TOKEN } from '~/config';
import classNames from 'classnames/bind';
import styles from './bookingform.module.scss';

const cx = classNames.bind(styles);

const Directions = ({ origin, destination }) => {
    const [originCoords, setOriginCoords] = useState(null);
    const [destCoords, setDestCoords] = useState(null);
    const [distance, setDistance] = useState(null);

    useEffect(() => {
        const geocodeOrigin = axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${origin}.json?access_token=${REACT_APP_MAPBOX_TOKEN}`,
        );
        const geocodeDest = axios.get(
            `https://api.mapbox.com/geocoding/v5/mapbox.places/${destination}.json?access_token=${REACT_APP_MAPBOX_TOKEN}`,
        );

        axios
            .all([geocodeOrigin, geocodeDest])
            .then(
                axios.spread((originRes, destRes) => {
                    const originCoords = originRes.data.features[0].center;
                    const destCoords = destRes.data.features[0].center;
                    setOriginCoords(originCoords);
                    setDestCoords(destCoords);
                }),
            )
            .catch((error) => {
                console.log(error);
            });
    }, [origin, destination]);

    useEffect(() => {
        if (originCoords && destCoords) {
            axios
                .get(
                    `https://api.mapbox.com/directions/v5/mapbox/driving/${originCoords[0]},${originCoords[1]};${destCoords[0]},${destCoords[1]}?access_token=${REACT_APP_MAPBOX_TOKEN}`,
                )
                .then((response) => {
                    const distance = response.data.routes[0].distance / 1000;
                    setDistance(distance);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [originCoords, destCoords]);

    return (
        <>
            {distance && (
                <div style={{ backgroundColor: 'red' }} className={cx('total')}>
                    <p>Distance: {Math.round(distance)}km</p>
                    <p>Price: {Math.round(distance * 6)}.000vnđ</p>
                </div>
            )}
        </>
    );
};

export default Directions;

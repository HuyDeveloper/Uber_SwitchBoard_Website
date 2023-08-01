import { useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import styles from './bookingform.module.scss';
import { REACT_APP_MAPBOX_TOKEN } from '~/config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PlaceSearch({ onSelect }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
        if (e.target.value) {
            axios
                .get(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json?access_token=${REACT_APP_MAPBOX_TOKEN}`,
                )
                .then((response) => {
                    setSearchResults(response.data.features);
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            setSearchResults([]);
        }
    };

    const handleSelect = (result) => {
        setSearchValue(result.place_name);
        setSearchResults([]);
        onSelect(result.place_name);
    };

    return (
        <div>
            <input
                type="text"
                id="query"
                value={searchValue}
                onChange={handleSearchChange}
                placeholder="Type your search..."
            />
            {searchResults.length > 0 && (
                <ul className={cx('list')}>
                    {searchResults.map((result) => (
                        <li key={result.id} onClick={() => handleSelect(result)}>
                            <FontAwesomeIcon className={cx('locationIcon')} icon={faLocationDot} /> {result.place_name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default PlaceSearch;

import classNames from 'classnames/bind';
import styles from './login.module.scss';
import Button from '~/components/Button';
import { useState, useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
const cx = classNames.bind(styles);

function Login() {
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const { loginAdmin } = useContext(AuthContext);
    const handleSubmit = () => {
        if (phone.length == 0 || password.length == 0) {
            alert('Your information is not invalid!');
        } else {
            loginAdmin(phone, password);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div>
                <form className={cx('inner')} onSubmit={handleSubmit}>
                    <div className={cx('login-form')}>
                        <div className={cx('logo')}>Sign in</div>

                        <input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className={cx('input')}
                            type="text"
                            name="phone"
                            placeholder="Phone number"
                        />
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={cx('input')}
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                        <Button type="submit" primary rounded large>
                            Log in
                        </Button>
                    </div>
                    <div className={cx('note')}>*Note: Must be sign in as administrator</div>
                </form>
            </div>
        </div>
    );
}

export default Login;

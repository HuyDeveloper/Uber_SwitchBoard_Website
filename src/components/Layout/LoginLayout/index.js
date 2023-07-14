import classNames from 'classnames';
import styles from './LoginLayout.module.scss';
const cx = classNames.bind(styles);
function LoginLayout({ children }) {
    return (
        <div>
            <h1>Header Login</h1>
            <div className={cx('content')}>{children}</div>
        </div>
    );
}

export default LoginLayout;

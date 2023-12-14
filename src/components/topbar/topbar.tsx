import './topbar.scss';
import logo from '../../assets/logo.svg';

export const TopBar = () => <>
    <div className='topbar'>
        <div className='logo'>
            <img src={logo} />
        </div>

        <div className='menu-items'>
            <div>
                SERVICES
            </div>
            <div>
                ABOUT US
            </div>
            <div>
                CONTACT US
            </div>
            <div>
                CAREERS
            </div>
        </div>

        <div className='menu-burger'></div>
    </div>
</>
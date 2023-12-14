import './footer.scss';
import logo from '../../assets/logo.svg';

export const Footer = () => <>
    <div className="footer">
        <div className='top'>
            <div className="left">
                <div className='logo'>
                    <div><img src={logo} /></div>
                    <div className='left-text'>Your goal is our target. Not anything in between. We use online marketing platforms and tools to achieve single objective - your business results.</div>
                </div>
            </div>
            <div className="right">
                <div className="column">
                    <div className='header'>Our Technologies</div>
                    <div>ReactJS</div>
                    <div>Gatsby</div>
                    <div>NextJS</div>
                    <div>NodeJS</div>
                    <div>GraphQL</div>
                    <div>Laravel</div>
                </div>
                <div className="column">
                    <div className='header'>Our Services</div>
                    <div>Social media Marketing</div>
                    <div>Web & Mobile App Development</div>
                    <div>Data & Analytics</div>
                    <div>Google Marketing solutions</div>
                    <div>Search Engine Optimization</div>
                </div>
            </div>
        </div>
        <div className="bottom">
            <div className='border' />
            Privacy Policy | Terms & Conditions
        </div>
    </div>
</>
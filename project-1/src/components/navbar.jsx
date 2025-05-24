import skinnLogo from '../assets/skinn_logo.png';
import userlogo from '../assets/Frame1.png'
import shoopingcart from '../assets/Frame.png'
import "../App.css"

const Nav = () => {
    return (
        <div>
            <nav>
                <div className='skinnlogo'>
                    <img src={skinnLogo} alt="skinn logo" />
                </div>
                <ul className='navstyle'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Shop</li>
                    <li>Contact Us</li>
                </ul>
                <div className='userlogo'>
                    <img src={userlogo} alt="userlogo" />
                </div>
                <div className='shopping'>
                    <img src={shoopingcart} alt="userlogo" />
                </div>
            </nav>
        </div>
    );
};

export default Nav;

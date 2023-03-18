import Logo from './images/logo.svg'
import '@fortawesome/fontawesome-free/css/all.css';


//logo
const Title = () => {
    return (
        <a href="/">
            <img src={Logo} alt="logo" className="logo" />
        </a>
    )
}
//navbar
const Header = () => {
    return (
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li><i className="fa-sharp fa-solid fa-cart-shopping fa-lg"></i></li>
                </ul>
            </div>
        </div>
    )
}
export default Header;
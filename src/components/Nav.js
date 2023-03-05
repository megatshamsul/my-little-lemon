import { Link } from 'react-router-dom';
import classes from './../css/Nav.module.css';
import logoImg from './../assets/little-lemon-logo.jpg';

function Nav() {
    return (
        <header className={classes.header}>
            <div className={classes.flexContainer} aria-label="navigation-section">
                <div aria-label="link-to-home">
                    <Link to='/'>
                        <img src={logoImg} alt="Logo" title="Little Lemon Restaurant logo" aria-label="little-lemon-restaurant"></img>
                    </Link>
                </div>
                <div aria-label="link-to-home"><Link to='/'>Home</Link></div>
                <div aria-label="link-to-about"><Link to='/about'>About</Link></div>
                <div aria-label="link-to-menu"><Link to='/menu'>Menu</Link></div>
                <div aria-label="link-to-reservations"><Link to='/reservations'>Reservations</Link></div>
                <div aria-label="link-to-order-online"><Link to='/order'>Order Online</Link></div>
                <div aria-label="link-to-login"><Link to='/login'>Login</Link></div>
            </div>
        </header>
    );
};

export default Nav;
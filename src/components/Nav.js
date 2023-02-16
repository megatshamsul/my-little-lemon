import { Link } from 'react-router-dom';
import classes from './../css/Nav.module.css';
import logoImg from './../assets/little-lemon-logo.jpg';

function Nav() {
    return (
        <header className={classes.header}>
            <div className={classes.flexContainer}>
                <div>
                    <Link to='/'>
                        <img src={logoImg} alt="Logo" title="Little Lemon Restaurant logo"></img>
                    </Link>
                </div>
                <div><Link to='/'>Home</Link></div>
                <div><Link to='/about'>About</Link></div>
                <div><Link to='/menu'>Menu</Link></div>
                <div><Link to='/reservations'>Reservations</Link></div>
                <div><Link to='/order'>Order Online</Link></div>
                <div><Link to='/login'>Login</Link></div>
            </div>
        </header>
    );
};

export default Nav;
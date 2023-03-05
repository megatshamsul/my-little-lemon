import { Link } from 'react-router-dom';
import classes from './../css/Footer.module.css';
import foodImg from './../assets/Mario and Adrian A.jpg';

function Footer() {
    return (
        <>
            <div className={classes.flexContainer} aria-label="footer-section">
                <div aria-label="img-restaurant">
                    <img src={foodImg} alt="Foods" title="Little Lemon Restaurant" className={classes.image} aria-label="little-lemon-restaurant"></img>
                </div>
                <div aria-label="doormat-navi-details">
                    <div className={classes.footerTitle} aria-label="doormat-navi-title">Doormat navigation</div>
                    <div className={classes.blankLine}></div>
                    <div><Link to='/' aria-label="doormat-navi-home">Home</Link></div>
                    <div><Link to='/about' aria-label="doormat-navi-about">About</Link></div>
                    <div><Link to='/menu' aria-label="doormat-navi-menu">Menu</Link></div>
                    <div><Link to='/reservations' aria-label="doormat-navi-reservations">Reservations</Link></div>
                    <div><Link to='/order-online' aria-label="doormat-navi-order">Order Online</Link></div>
                    <div><Link to='/login' aria-label="doormat-navi-login">Login</Link></div>
                </div>
                <div aria-label="contact-details">
                    <div className={classes.footerTitle} aria-label="contact-title">Contact</div>
                    <div className={classes.blankLine}></div>
                    <div aria-label="contact-address">Address</div>
                    <div aria-label="contact-phone-number">Phone Number</div>
                    <div aria-label="contact-email">Email</div>
                </div>
                <div aria-label="social-media-details">
                    <div className={classes.footerTitle} aria-label="social-media-title">Social Media Links</div>
                    <div className={classes.blankLine}></div>
                    <div aria-label="social-media-address">Address</div>
                    <div aria-label="social-media-phone-number">Phone Number</div>
                    <div aria-label="social-media-email">Email</div>
                </div>
            </div>
        </>
    );
};

export default Footer;
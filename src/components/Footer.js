import { Link } from 'react-router-dom';
import classes from './../css/Footer.module.css';
import foodImg from './../assets/Mario and Adrian A.jpg';

function Footer() {
    return (
        <>
            <div className={classes.flexContainer}>
                <div>
                    <img src={foodImg} alt="Foods" title="Little Lemon Restaurant" className={classes.image}></img>
                </div>
                <div>
                    <div className={classes.footerTitle}>Doormat navigation</div>
                    <div className={classes.blankLine}></div>
                    <div><Link to='/'>Home</Link></div>
                    <div><Link to='/about'>About</Link></div>
                    <div><Link to='/menu'>Menu</Link></div>
                    <div><Link to='/reservations'>Reservations</Link></div>
                    <div><Link to='/order'>Order Online</Link></div>
                    <div><Link to='/login'>Login</Link></div>
                </div>
                <div>
                    <div className={classes.footerTitle}>Contact</div>
                    <div className={classes.blankLine}></div>
                    <div>Address</div>
                    <div>Phone Number</div>
                    <div>Email</div>
                </div>
                <div>
                    <div className={classes.footerTitle}>Social Media Links</div>
                    <div className={classes.blankLine}></div>
                    <div>Address</div>
                    <div>Phone Number</div>
                    <div>Email</div>
                </div>
            </div>
        </>
    );
};

export default Footer;
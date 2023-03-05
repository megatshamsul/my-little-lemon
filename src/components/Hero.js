import { Link } from 'react-router-dom';
import classes from './../css/Hero.module.css';
import foodImg from './../assets/restauranfood.jpg';

function Hero() {
    return (
        <>
            <div className={classes.flexContainer} aria-label="hero-section">
                <div>
                    <div className={classes.title} aria-label="little-lemon">Little Lemon</div>
                    <div className={classes.subTitle} aria-label="chicago">Chicago</div>
                    <div className={classes.blankLine}></div>
                    <div className={classes.desc} aria-label="little-lemon-description">
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </div>
                    <div className={classes.blankLine}></div>
                    <div className={classes.buttonsLine} aria-label="link-to-reservations">
                        <Link to='/reservations'>
                            <button className={classes.buttons} aria-label="Click to reserve a table">Reserve a Table</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={foodImg} alt="Foods" title="Little Lemon Restaurant foods" className={classes.image} aria-label="little-lemon-restaurant"></img>
                </div>
            </div>
        </>
    );
};

export default Hero;
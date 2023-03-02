import { Link } from 'react-router-dom';
import classes from './../css/Hero.module.css';
import foodImg from './../assets/restauranfood.jpg';

function Hero() {
    return (
        <>
            <div className={classes.flexContainer}>
                <div>
                    <div className={classes.title}>Little Lemon</div>
                    <div className={classes.subTitle}>Chicago</div>
                    <div className={classes.blankLine}></div>
                    <div className={classes.desc}>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </div>
                    <div className={classes.blankLine}></div>
                    <div className={classes.buttonsLine}>
                        <Link to='/reservations'>
                            <button className={classes.buttons}>Reserve a Table</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={foodImg} alt="Foods" title="Little Lemon Restaurant foods" className={classes.image}></img>
                </div>
            </div>
        </>
    );
};

export default Hero;
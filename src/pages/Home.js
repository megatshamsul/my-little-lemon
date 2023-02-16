import { Link } from 'react-router-dom';
import classes from './../css/Home.module.css';
import specialsImg1 from './../assets/greek salad.jpg';
import specialsImg2 from './../assets/Bruchetta.jpg';
import specialsImg3 from './../assets/lemon dessert.jpg';

function Home() {
    return (
        <>
            <div className={classes.flexContainer1}>
                <div></div>
                <div className={classes.specialsText}>Specials</div>
                <div></div>
                <div></div>
                <div></div>
                <div>
                    <Link to='/menu'>
                        <button className={classes.buttons}>Online Menu</button>
                    </Link>
                </div>
            </div>
            <div className={classes.flexContainer2}>
                <div className={classes.specialsCard}>
                    <img src={specialsImg1} alt="Greek Salad" title="Specials 1" className={classes.image}></img>
                    <div className={classes.blankLine}></div>
                    <div className={classes.flexContainer3}>
                        <div className={classes.specialsTitle}>Greek Salad</div>
                        <div className={classes.specialsPrice}>$12.99</div>
                    </div>
                    <div className={classes.blankLine}></div>
                    <div className={classes.specialsDesc}>
                        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                    </div>
                    <div className={classes.blankLine}></div>
                    <div className={classes.specialsTitle}>
                        <Link to='/order'>Order a delivery</Link>
                    </div>
                </div>
                <div className={classes.specialsCard}>
                    <img src={specialsImg2} alt="Bruchetta" title="Specials 2" className={classes.image}></img>
                    <div className={classes.blankLine}></div>
                    <div className={classes.flexContainer3}>
                        <div className={classes.specialsTitle}>Bruchetta</div>
                        <div className={classes.specialsPrice}>$5.99</div>
                    </div>
                    <div className={classes.blankLine}></div>
                    <div className={classes.specialsDesc}>
                        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                    </div>
                    <div className={classes.blankLine}></div>
                    <div className={classes.specialsTitle}>
                        <Link to='/order'>Order a delivery</Link>
                    </div>
                </div>
                <div className={classes.specialsCard}>
                    <img src={specialsImg3} alt="Lemon Dessert" title="Specials 3" className={classes.image}></img>
                    <div className={classes.blankLine}></div>
                    <div className={classes.flexContainer3}>
                        <div className={classes.specialsTitle}>Lemon Dessert</div>
                        <div className={classes.specialsPrice}>$5.00</div>
                    </div>
                    <div className={classes.blankLine}></div>
                    <div className={classes.specialsDesc}>
                    This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                    </div>
                    <div className={classes.blankLine}></div>
                    <div className={classes.specialsTitle}>
                        <Link to='/order'>Order a delivery</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;